import io
import glob
import json
import os
from pathlib import Path
import re
import subprocess

files = dict()

def printError(file, message):
    print(f'{file["jsPath"]}: {message}')
def printErrorField(file, fieldName, message):
    print(f'{file["jsPath"]}, {fieldName}: {message}')

def importJs(jsPath):
    with io.open(jsPath, 'r') as jsFile:
        # Strip out the js specific stuff to turn it into json
        inText = jsFile.read()
        jsonText = re.sub(r"(files(.*?)= )|(^[\/\/].*)", "", inText, flags=re.MULTILINE)
        key = re.search(r"(?<=files\[\").+?(?=\"\])", inText).group()

        file = json.loads(jsonText)
        file["jsPath"] = jsPath
        file["key"] = key

        if key in files:
            printError(file, f'file key {key} already exists.')
        else:
            files[key] = file

def importFieldExport(fieldExportPath):
    with io.open(fieldExportPath, 'r') as fieldExportFile:
        jsonText = fieldExportFile.read()
        global allFieldExports
        allFieldExports = json.loads(jsonText)["files"]

def validateReferences(file):
    referenceFiles = []
    if "referenceFiles" in file:
        for referenceFile in file["referenceFiles"]:
            if referenceFile not in files:
                printError(file, f'referenceFile "{referenceFile}" does not exist.')
            else:
                referenceFiles.append(referenceFile)

    if "appendFiles" in file:
        for appendFile in file["appendFiles"]:
            if appendFile not in files:
                printError(file, f'appendFile "{appendFile}" does not exist.')
            if appendFile not in referenceFiles:
                printError(file, f'appendFile "{appendFile}" is not in \"referenceFiles\".')

def fieldValidateFieldExists(file, field, fieldName, value):
    if value not in field:
        printErrorField(file, fieldName, f'\"{value}\" does not exist.')
        return False
    return True

def fieldValidateFieldNotEmpty(file, field, fieldName, value):
    if value not in field:
        printErrorField(file, fieldName, f'\"{value}\" does not exist.')
        return False
    elif not field[value]:
        printErrorField(file, fieldName, f'\"{value}\" is empty.')
        return False
    return True

def validateField(file, field, fieldExports, usedNames):
    fieldName = "???"
    if fieldValidateFieldNotEmpty(file, field, fieldName, "name"):
        fieldName = field["name"]
        
        if fieldName in usedNames:
            printErrorField(file, fieldName, f'name \"{fieldName}\" already in use.')
        usedNames.append(fieldName)

    if "altNames" in field:
        for altName in field["altNames"]:
            if altName in usedNames:
                printErrorField(file, fieldName, f'altName \"{altName}\" already in use.')
            usedNames.append(altName)

    fieldValidateFieldNotEmpty(file, field, fieldName, "description")

    fieldTypeName = ""
    hasDataLength = False
    hasMemSize = False
    if fieldValidateFieldExists(file, field, fieldName, "type"):
        fieldType = field["type"]

        if fieldValidateFieldNotEmpty(file, fieldType, fieldName, "type"):
            fieldTypeName = fieldType["type"]
        validFieldTypes = ["int", "int or", "text", "reference", "string", "boolean", "inverse boolean", "parse"]
        if not fieldTypeName in validFieldTypes:
            printErrorField(file, fieldName, f'invalid type \"{fieldTypeName}\".')

        hasDataLength = fieldValidateFieldExists(file, fieldType, fieldName, "dataLength")
        hasMemSize = fieldValidateFieldExists(file, fieldType, fieldName, "memSize")

        if fieldTypeName == "reference":
            refHasFile = fieldValidateFieldNotEmpty(file, fieldType, fieldName, "file")
            refHasField = fieldValidateFieldNotEmpty(file, fieldType, fieldName, "field")
            if refHasFile and refHasField:
                refFileName = fieldType["file"]
                if refFileName not in files:
                    printErrorField(file, fieldName, f'type reference file "{refFileName}" does not exist.')
                else:
                    referenceExists = False
                    refFile = files[refFileName]
                    if "fields" in refFile:
                        if any(f for f in refFile["fields"] if f["name"] == fieldType["field"]):
                            referenceExists = True
                    if not referenceExists:
                        printErrorField(file, fieldName, f'type reference "{refFileName}#{fieldType["field"]}" does not exist.')

    if fieldExports:
        fieldExport = next((f for f in fieldExports["fields"] if f["name"].casefold() == field["name"].casefold()), None)
        if "altNames" in field:
            for altName in field["altNames"]:
                altFieldExport = next((f for f in fieldExports["fields"] if f["name"].casefold() == altName.casefold()), None)
                
                if not altFieldExport:
                    printErrorField(file, fieldName, f'altName \"{altName}\" is not a code supported field.')
                elif not fieldExport:
                    fieldExport = altFieldExport

        # TODO: Filter out comment fields
        if not fieldExport:
            printErrorField(file, fieldName, 'is not a code supported field.')
        else:
            if not fieldTypeName or fieldTypeName != fieldExport["type"]:
                printErrorField(file, fieldName, f'type \"{fieldTypeName if fieldTypeName else ""}\" does not match code expected \"{fieldExport["type"]}\".')
            if not hasDataLength or field["type"]["dataLength"] != fieldExport["dataLength"]:
                printErrorField(file, fieldName, f'dataLength \"{field["type"]["dataLength"] if hasDataLength else ""}\" does not match code expected \"{fieldExport["dataLength"]}\".')
            if not hasMemSize or field["type"]["memSize"] != fieldExport["memSize"]:
                printErrorField(file, fieldName, f'memSize \"{field["type"]["memSize"] if hasMemSize else ""}\" does not match code expected \"{fieldExport["memSize"]}\".')

    if "appendField" in field:
        appendField = field["appendField"]
        appendFieldFileName = ""
        appendFieldHasFile = fieldValidateFieldNotEmpty(file, appendField, fieldName, "file")
        appendFieldHasField = fieldValidateFieldNotEmpty(file, appendField, fieldName, "field")
        if appendFieldHasFile and appendFieldHasField:
            appendFieldFileName = appendField["file"]
            if appendFieldFileName not in files:
                printErrorField(file, fieldName, f'appendField file "{appendFieldFileName}" does not exist.')
            elif appendFieldFileName != file["key"] and ("referenceFiles" not in file or appendFieldFileName not in file["referenceFiles"]):
                printErrorField(file, fieldName, f'appendField file "{appendFieldFileName}" is not in \"referenceFiles\".')
            else:
                appendFieldFile = files[appendFieldFileName]
                appendFieldExists = False
                if "fields" in appendFieldFile:
                    if any(f for f in appendFieldFile["fields"] if f["name"] == appendField["field"]):
                        appendFieldExists = True
                if not appendFieldExists:
                    printErrorField(file, fieldName, f'appendField "{appendFieldFileName}#{appendField["field"]}" does not exist.')

    # TODO: Validate links

def validateFields(file, fieldExports):
    if "fields" not in file:
        printError(file, f'has no "fields" array.')
    
    usedNames = []
    for field in file["fields"]:
        validateField(file, field, fieldExports, usedNames)
    
    if "appendFiles" in file:
        for appendFileName in file["appendFiles"]:
            if appendFileName in files:
                appendFile = files[appendFileName]
                if "fields" in appendFile:
                    for field in appendFile["fields"]:
                        validateField(appendFile, field, fieldExports, usedNames)

def validateFile(file):
    fieldExports = next((f for f in allFieldExports if f["name"].casefold() == file["key"].casefold()), None)
    if not fieldExports:
        printError(file, f'code does not support file {file["key"]}')

    if "title" not in file:
        printError(file, 'title does not exist.')
    elif not file["title"]:
        printError(file, 'title is empty.')

    if "overview" not in file:
        printError(file, 'overview does not exist.')
    elif not file["overview"]:
        printError(file, 'overview is empty.')

    validateReferences(file)
    validateFields(file, fieldExports)

def validateDataGuide(dataPath):
    importFieldExport(os.path.join(dataPath, "DataGuideFieldExport.json"))

    # Import all the files
    dataFilesPath = os.path.join(dataPath, "files")
    for jsFilepath in glob.glob(os.path.join(dataFilesPath, '*.js')):
        importJs(Path(jsFilepath))

    # Validate 'em
    for key, file in files.items():
        validateFile(file)
    
    return True
