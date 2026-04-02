import io
import glob
import json
import os
from pathlib import Path
import re
import subprocess

def dumpJson(jsFile, jsJson, key):
        output = "// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like \"fetch\".\n// Workaround is to place json into .js files and then load them via html script tags.\n// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp\n"

        # Add the js variable name
        output += f"files[\"{key}\"] = "
        output += json.dumps(jsJson, indent=4)

        jsFile.seek(0)
        jsFile.truncate(0)
        jsFile.write(output)

def updateField(field, fieldExports):
    fieldExport = next((f for f in fieldExports["fields"] if f["name"].casefold() == field["name"].casefold()), None)
    if not fieldExport and "altNames" in field:
        for altName in field["altNames"]:
            altFieldExport = next((f for f in fieldExports["fields"] if f["name"].casefold() == altName.casefold()), None)
            fieldExport = altFieldExport
            break
    
    if not fieldExport:
        return
    
    fieldType = None
    if "type" in field:
        fieldType = field["type"]

    type = {}
    type["type"] = fieldExport["type"]
    type["dataLength"] = fieldExport["dataLength"]
    type["memSize"] = fieldExport["memSize"]

    if type["type"] == "reference":
        if fieldType != None:
            if "file" in fieldType:
                type["file"] = fieldType["file"]
            if "field" in fieldType:
                type["field"] = fieldType["field"]
        else:
            type["file"] = ""
            type["field"] = ""
    elif type["type"] == "parse":
        if fieldType != None:
            if "description" in fieldType:
                type["description"] = fieldType["description"]
        else:
            type["description"] = ""

    field["type"] = type
        
def updateFields(file, fieldExports):
    if fieldExports:
        if "fields" in file:
            for field in file["fields"]:
                if "name" in field:
                    updateField(field, fieldExports)

def updateFile(jsPath, allFieldExports):
    with io.open(jsPath, 'r+') as jsFile:
        # Strip out the js specific stuff to turn it into json
        inText = jsFile.read()
        jsonText = re.sub(r"(files(.*?)= )|(^[\/\/].*)", "", inText, flags=re.MULTILINE)
        key = re.search(r"(?<=files\[\").+?(?=\"\])", inText).group()
        file = json.loads(jsonText)

        # Special cases
        if key == "SharedItems":
            # The SharedItems file has code dependencies in the armor, weapons, and misc files
            # The code schema is the same for all three so just need to look at one
            fieldExports = next((f for f in allFieldExports if f["name"].casefold() == "armor"), None)
            updateFields(file, fieldExports)
        elif key == "enums":
            # The enums file has no code dependency, so don't need to update it
            return
        else:
            fieldExports = next((f for f in allFieldExports if f["name"].casefold() == key.casefold()), None)
            updateFields(file, fieldExports)

        dumpJson(jsFile, file, key)

def generateJsFiles(dataPath, usePerforce):
    dataFilesPath = os.path.join(dataPath, "files")
    if (usePerforce):
        # Gather perforce files to checkout or add
        p4EditString = ""
        p4AddString = ""
        for jsFilepath in glob.glob(os.path.join(dataFilesPath, '*.js')):
            jsPath = Path(jsFilepath)
            if os.path.exists(jsPath):
                p4EditString += jsPath.name + " "
            else:
                p4AddString += jsPath.name + " "

        # Check out or add files
        if p4EditString:
            subprocess.run("p4 edit " + p4EditString, check=True, shell=True, cwd=dataFilesPath)
        if p4AddString:
            subprocess.run("p4 add " + p4AddString, check=True, shell=True, cwd=dataFilesPath)

    fieldExportPath = os.path.join(dataPath, "DataGuideFieldExport.json")
    allFieldExports = []
    with io.open(fieldExportPath, 'r') as fieldExportFile:
        jsonText = fieldExportFile.read()
        allFieldExports = json.loads(jsonText)["files"]

    # Update the json files with what the code expects
    for jsFilepath in glob.glob(os.path.join(dataFilesPath, '*.js')):
        updateFile(Path(jsFilepath), allFieldExports)

    if (usePerforce):
        # Revert unchanged files from perforce
        subprocess.run("p4 revert -a -c default", check=True, shell=True, cwd=dataFilesPath)
        
    return True
