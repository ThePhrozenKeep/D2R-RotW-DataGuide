// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["skills"] = {
    "title": "skills.txt",
    "referenceFiles": [
        "enums",
        "PlayerClass",
        "events",
        "MonMode",
        "PlrMode",
        "ElemTypes"
    ],
    "overview": "This file controls all skill functionalities. Skills are abilities used by all units in the game.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "skill",
            "description": "Defines the unique name ID for the skill, which is how other files can reference the skill. The order of the defined skills will determine their ID numbers, so they should not be reordered.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "charclass",
            "description": "Assigns the skill to a specific character class which affects how skill item modifiers work and what skills the class can learn.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "PlayerClass",
                "field": "Code"
            },
            "appendField": {
                "file": "PlayerClass",
                "field": "Code"
            }
        },
        {
            "name": "skilldesc",
            "description": "Pointer to data that controls the skill's tooltip and general UI display.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skilldesc",
                "field": "skilldesc"
            }
        },
        {
            "name": "srvstfunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "srvdofunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "srvstopfunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "prgstack",
            "description": "Boolean Field. If equals 1, then all $!#srvprgfunc#!$ functions will execute, based on the current number of progressive charges. If equals 0, then only the relative $!#srvprgfunc#!$ function will execute, based on the current number of progressive charges.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "srvprgfunc#",
            "altNames": [
                "srvprgfunc1",
                "srvprgfunc2",
                "srvprgfunc3"
            ],
            "description": "Controls what Server Do function is used when executing the progressive skill with a charge number equal to 1, 2, and 3, respectively. This field uses the same functions as the $!#srvdofunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "prgcalc#",
            "altNames": [
                "prgcalc1",
                "prgcalc2",
                "prgcalc3"
            ],
            "description": "Calculation Field. Used as a possible parameter for calculating values when executing the progressive skill with a charge number equal to 1, 2, and 3, respectively.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "prgdam",
            "description": "Calls a function to modify the progressive damage dealt",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "1",
                    {
                        "id": "ModifyProgressiveDamage",
                        "text": "ModifyProgressiveDamage"
                    },
                    "$!#aurastat1!$<br>$!#calc1!$<br>$!#tgtoverlay!$",
                    "Modify the percentage of the physical damage dealt by \"$!#calc1!$ * $!#aurastat1!$\" and apply $!#tgtoverlay!$ on the target. For tooltips the bonus is calculated as \"($!skillcalc!$ identifier \"ln12\") * $!#aurastat1!$\""
                ],
                [
                    "2",
                    {
                        "id": "ModifyProgressiveSteal",
                        "text": "ModifyProgressiveSteal"
                    },
                    "$!#aurastat1!$<br>$!#calc1!$",
                    "Modify the percentage of the life steal and mana steal gained by the value of $!#aurastat1!$<br>1: \"life steal + $!#calc1!$\"<br>2: \"life steal + $!#calc1!$\" and \"mana steal + $!#calc1!$\"<br>3: \"life steal + (2 * $!#calc1!$)\" and \"mana steal + (2 * $!#calc1!$)\""
                ],
                [
                    "3",
                    {
                        "id": "ModifyProgressiveElemental",
                        "text": "ModifyProgressiveElemental"
                    },
                    "$!#aurastat1!$<br>$!#Param2!$<br>$!#EType!$",
                    "Add the skill's elemental damage (see $!#EMin!$ and related fields). If $!#EType!$ equals Cold, then when $!#aurastat1!$ equals 2 or 3, add \"Cold Length / $!#Param2!$\" to the Freeze Length"
                ],
                [
                    "4",
                    {
                        "id": "ModifyProgressiveElementalConvert",
                        "text": "ModifyProgressiveElementalConvert"
                    },
                    "$!#aurastat1!$<br>$!#calc1!$<br>$!#Param5!$<br>$!#EType!$",
                    "Add the skill's elemental damage (see $!#EMin!$ and related fields). If $!#EType!$ equals Cold, then when $!#aurastat1!$ equals 3, add \"Cold Length / $!#Param5!$\" to the Freeze Length. Convert a $!#calc1!$ percentage of the physical damage dealt to the skill's elemental damage."
                ]
            ]
        },
        {
            "name": "srvmissile",
            "description": "Used as a parameter for controlling the main missile used by the server functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "decquant",
            "description": "Boolean Field. If equals 1, then the unit's ammo quantity will be updated each time the skill's $!#srvdofunc!$ is called. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "lob",
            "description": "Boolean Field. If equals 1, then missiles created by the skill's functions will use the missile lobbing function, which will cause the missile fly in an arc pattern. If equals 0, then missiles that are created will use the normal linear function.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "srvmissile#",
            "altNames": [
                "srvmissilea",
                "srvmissileb",
                "srvmissilec"
            ],
            "description": "Used as a parameter for controlling the secondary missiles used by the server functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "useServerMissilesOnRemoteClients",
            "description": "Control new missile changes per player skill. Values of 1 will force enable it for that skill. Skills that have matching server/client missiles sets for the skill get auto enabled. Setting this to a value greater than 1 will force it to skip this auto enable logic. If equals 0, then ignore this. Note: this feature is disabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "srvoverlay",
            "description": "Used as a possible parameter used by various skill functions to create an overlay on units.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "aurafilter",
            "description": "Controls different flags that affect how the skill's aura will affect the different types of units. Uses an integer value to check against different bit fields. For example, if the value equals 4354 (binary = 1000100000010) then that returns true for the 4096 (binary = 1000000000000), 256 (binary = 0000100000000), and 2 (binary = 0000000000010) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Aura Filter"
            }
        },
        {
            "name": "aurastate",
            "description": "A state applied to the caster unit. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "auratargetstate",
            "description": "A state applied to the target unit. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "auralencalc",
            "description": "Calculation Field. Controls the state duration on the unit (where 25 Frames = 1 second). If this value is empty, then the state duration will be controlled by other functions, or it will last forever. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "aurarangecalc",
            "description": "Calculation Field. Controls the area radius size for auras and other effects, measured in grid sub-tiles. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "aurastat#",
            "altNames": [
                "aurastat1",
                "aurastat2",
                "aurastat3",
                "aurastat4",
                "aurastat5",
                "aurastat6"
            ],
            "description": "Controls which stat modifiers will be altered or added by the skill. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "aurastatcalc#",
            "altNames": [
                "aurastatcalc1",
                "aurastatcalc2",
                "aurastatcalc3",
                "aurastatcalc4",
                "aurastatcalc5",
                "aurastatcalc6"
            ],
            "description": "Calculation Field. Controls the value for the relative $!#aurastat#!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "auraevent#",
            "altNames": [
                "auraevent1",
                "auraevent2",
                "auraevent3"
            ],
            "description": "Controls what event will trigger the relative $!#auraeventfunc#!$ field function. Used as a possible parameter used by various skill functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "events",
                "field": "event"
            },
            "appendField": {
                "file": "events",
                "field": "event"
            }
        },
        {
            "name": "auraeventfunc#",
            "altNames": [
                "auraeventfunc1",
                "auraeventfunc2",
                "auraeventfunc3"
            ],
            "description": "Controls the function used when the relative $!#auraevent#!$ event is triggered. Corresponds to a $!enums#Server Event Functions!$.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "appendField": {
                "file": "enums",
                "field": "Server Event Functions"
            }
        },
        {
            "name": "passivestate",
            "description": "Links to a state that is automatically applied as a passive when the skill gains levels.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "passiveitype",
            "description": "Links to an Item Type to define what type of item needs to be equipped in order to enable the $!#passivestate!$. Not all stats support this behavior, usually only ones with \"mastery\" in the name.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "ItemType"
            }
        },
        {
            "name": "passivereqweaponcount",
            "description": "Controls how many equipped weapons are needed for the $!#passivestate!$ to be enabled. If the value equals 1, then the player must have 1 weapon equipped for the $!#passivestate!$ to be enabled. If the value equals 2, then the player must be dual wielding weapons for the $!#passivestate!$ to be enabled. If the value equals 0, then ignore this field. Not all stats support this behavior, usually only ones with \"mastery\" in the name.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "passivestat#",
            "altNames": [
                "passivestat1",
                "passivestat2",
                "passivestat3",
                "passivestat4",
                "passivestat5",
                "passivestat6",
                "passivestat7",
                "passivestat8",
                "passivestat9",
                "passivestat10",
                "passivestat11",
                "passivestat12",
                "passivestat13",
                "passivestat14"
            ],
            "description": "Assigns stat modifiers to the $!#passivestate!$.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "ItemStatCost",
                "field": "Stat"
            }
        },
        {
            "name": "passivecalc#",
            "altNames": [
                "passivecalc1",
                "passivecalc2",
                "passivecalc3",
                "passivecalc4",
                "passivecalc5",
                "passivecalc6",
                "passivecalc7",
                "passivecalc8",
                "passivecalc9",
                "passivecalc10",
                "passivecalc11",
                "passivecalc12",
                "passivecalc13",
                "passivecalc14"
            ],
            "description": "Calculation Field. Controls the value for the relative $!#passivestat#!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "summon",
            "description": "Controls what monster is summoned by the skill. This field's usage will depend on the skill function used. This field can also be used as reference for AI behaviors and for the $!skilldesc!$ file.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "monstats",
                "field": "Id"
            }
        },
        {
            "name": "pettype",
            "description": "Links to a pet type data to control how the summoned unit is displayed on the UI",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 8,
                "file": "pettype",
                "field": "pet type"
            }
        },
        {
            "name": "petmax",
            "description": "Calculation Field. Used skill functions that summon pets to control how many summon units are allowed at a time.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "summode",
            "description": "Defines the animation mode that the summoned monster will be initiated with. Uses a $!MonMode#code!$.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "MonMode",
                "field": "code"
            },
            "appendField": {
                "file": "MonMode",
                "field": "name"
            }
        },
        {
            "name": "sumskill#",
            "altNames": [
                "sumskill1",
                "sumskill2",
                "sumskill3",
                "sumskill4",
                "sumskill5"
            ],
            "description": "Assigns a skill to the summoned monster. This can be useful for adding a skill to a monster to transition its synergy bonuses.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "sumsk#calc",
            "altNames": [
                "sumsk1calc",
                "sumsk2calc",
                "sumsk3calc",
                "sumsk4calc",
                "sumsk5calc"
            ],
            "description": "Calculation Field. Controls the skill level for the designated $!#sumskill#!$ field when the skill is assigned to the monster.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "sumumod",
            "description": "Assigns a monster modifier to the summoned monster. Uses the index of an entry in $!monumod!$",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "sumoverlay",
            "description": "Creates an overlay on the summoned monster when it is first created.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "stsuccessonly",
            "description": "Boolean Field. If equals 1, then the following sound and overlay fields will only play when the skill is successfully cast, instead of always being used even when the skill cast is interrupted. If equals 0, then the following sound and overlay fields will always be used when the skill is cast, regardless if the skill was interrupted or not.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "stsound",
            "description": "Controls what client sound is played when the skill is used, based on the client starting function",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "stsoundclass",
            "description": "Controls what client sound is played when the skill is used by the skill's assigned class (See $!#charclass!$ field), based on the client starting function. If the unit using the skill is not the same class as the $!#charclass!$ value for the skill, then this sound will not play.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "stsounddelay",
            "description": "Boolean Field. If equals 1, then use the weapon's hit class to determine the delay in frames (where 25 frames = 1 second) before playing the skill's start sound. If equals 0, then the skill's start sound will play immediately.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            },
            "table": [
                [
                    "Hit Class",
                    "Sound Used",
                    "Sound Delay"
                ],
                [
                    "None",
                    "None",
                    "0 frames"
                ],
                [
                    "Hand-To-Hand",
                    "weapon_punch_1",
                    "6 frames"
                ],
                [
                    "One Handed Swing Small",
                    "weapon_1hs_small_1",
                    "6 frames"
                ],
                [
                    "One Handed Swing Large",
                    "weapon_1hs_large_1",
                    "6 frames"
                ],
                [
                    "Two Handed Swing Small",
                    "weapon_2hs_small_1",
                    "8 frames"
                ],
                [
                    "Two Handed Swing Large",
                    "weapon_2hs_large_1",
                    "8 frames"
                ],
                [
                    "One Handed Thrust",
                    "weapon_1ht_1",
                    "6 frames"
                ],
                [
                    "Two Handed Thrust",
                    "weapon_2ht_1",
                    "6 frames"
                ],
                [
                    "Club",
                    "weapon_1hs_large_1",
                    "6 frames"
                ],
                [
                    "Staff",
                    "weapon_staff_1",
                    "6 frames"
                ],
                [
                    "Bow",
                    "None",
                    "0 frames"
                ],
                [
                    "Crossbow",
                    "None",
                    "0 frames"
                ],
                [
                    "Claw",
                    "None",
                    "0 frames"
                ]
            ]
        },
        {
            "name": "weaponsnd",
            "description": "Boolean Field. If equals 1, then play the weapon's hit sound when hitting an enemy with this skill. The sound chosen is based on the weapon's hit class. Also use the sound delay based on the weapon's hit class to determine the delay in frames (where 25 frames = 1 second) before playing the weapon hit sound (See $!#stsounddelay!$ for the types of hit class sounds and delays used). If equals 0, then do not play the weapon hit sound when hitting an enemy with the skill attack.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "dosound",
            "description": "Controls the sound for the skill each time the $!#cltdofunc!$ is used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "dosound a",
            "altNames": [
                "dosound b"
            ],
            "description": "Used as a possible parameter for playing additional sounds based on the $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "tgtoverlay",
            "description": "Used as a possible parameter for adding an Overlay on the target unit, based on the $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "tgtsound",
            "description": "Used as a possible parameter for playing a sound located on the target unit, based on the $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "prgoverlay",
            "description": "Used as a possible parameter for adding an Overlay on the caster unit for progressive charge-up skill functions, based on the $!#cltdofunc!$ used and how many progressive charges the caster unit has",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "prgsound",
            "description": "Used as a possible parameter for playing a sound when using the skill for progressive charge-up skill functions, based on the $!#cltdofunc!$ used and how many progressive charges the caster unit has",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "castoverlay",
            "description": "Used as a possible parameter for adding an Overlay on the caster unit when using the skill, based on the $!#cltstfunc!$ / $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "cltoverlaya",
            "altNames": [
                "cltoverlayb"
            ],
            "description": "Used as a possible parameter for adding additional Overlays on the caster unit, based on the $!#cltstfunc!$ / $!#cltdofunc!$ used",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "cltstfunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "cltdofunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "cltstopfunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "cltprgfunc#",
            "altNames": [
                "cltprgfunc1",
                "cltprgfunc2",
                "cltprgfunc3"
            ],
            "description": "Controls which Client Do function is used when the skill is executed while having a progressive charge number equal to 1, 2, and 3, respectively. (uses $!#cltdofunc!$ values)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "cltmissile",
            "description": "Used as a parameter for controlling the main missile by the client functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "cltmissile#",
            "altNames": [
                "cltmissilea",
                "cltmissileb",
                "cltmissilec",
                "cltmissiled"
            ],
            "description": "Used as a parameter for controlling the secondary missiles used by the client functions.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "cltcalc#",
            "altNames": [
                "cltcalc1",
                "cltcalc2",
                "cltcalc3"
            ],
            "description": "Calculation Field. Use as a possible parameter for controlling values for the client functions.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "warp",
            "description": "Boolean Field. If equals 1 and the skill uses a function that involves warping/teleporting, then check for a scene transition loading screen, if necessary. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "immediate",
            "description": "Boolean Field. If equals 1 and the skill has a periodic function, then immediately perform the skill's function when the periodic skill is activated. If equals 0, then wait until the skill's first periodic delay before performing the skill's function.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "enhanceable",
            "description": "Boolean Field. If equals 1, then the skill will be included in the plus to all skills item modifier. If equals 0, then the skill will not be included in the plus to all skills item modifier.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "attackrank",
            "description": "Controls the skill's AI score value for determining what is the best target for the AI. The higher the value, then the more likely the AI will select a target with this skill equipped.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "noammo",
            "description": "Boolean Field. If equals 1, then the skill will not check that weapon's ammo when performing an attack. This relies on the $!ItemTypes#Shoots!$ field. If equals 0, then the weapon will consume its ammo when being used by the skill.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "range",
            "description": "Determines how the unit uses the skill, which affects the weapon requirements and the type of attack used.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "enums",
                "field": "Skill Ranges"
            },
            "appendField": {
                "file": "enums",
                "field": "Skill Ranges"
            }
        },
        {
            "name": "weapsel",
            "description": "If the unit can dual wield weapons, then this field will control how the weapons are used for the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "Use the Left or Right Hand weapon"
                ],
                [
                    "1",
                    "Use the Left Hand weapon"
                ],
                [
                    "2",
                    "Use the Left and/or Right Hand weapon"
                ],
                [
                    "3",
                    "Always use both weapons"
                ],
                [
                    "4",
                    "Ignore the weapon used"
                ]
            ]
        },
        {
            "name": "itypea#",
            "altNames": [
                "itypea1",
                "itypea2",
                "itypea3"
            ],
            "description": "Controls what Item Types are included, or allowed, when determining if this skill can be used",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "etypea#",
            "altNames": [
                "etypea1",
                "etypea2"
            ],
            "description": "Controls what Item Types are excluded, or not allowed, when determining if this skill can be used",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "itypeb#",
            "altNames": [
                "itypeb1",
                "itypeb2",
                "itypeb3"
            ],
            "description": "Controls what alternate Item Types are included, or allowed, when determining if this skill can be used. This acts as a second set of Item Types to check.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "etypeb#",
            "altNames": [
                "etypeb1",
                "etypeb2"
            ],
            "description": "Controls what alternate Item Types are excluded, or not allowed, when determining if this skill can be used. This acts as a second set of Item Types to check.",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 16,
                "file": "ItemTypes",
                "field": "Code"
            }
        },
        {
            "name": "anim",
            "description": "Controls the animation mode that the player character will use when using this skill. Setting the mode to Sequence (SQ) will cause the player character to play a time controlled animation sequence, utilizing certain sequence fields. Uses a $!PlrMode#Code!$",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "PlrMode",
                "field": "Code"
            },
            "appendField": {
                "file": "PlrMode",
                "field": "Name"
            }
        },
        {
            "name": "seqtrans",
            "description": "If the $!#anim!$ field equals SQ (Sequence) and this field equals SC (Cast), then the sequence animation speed can be modified by the faster cast rate stat modifier. Uses a $!PlrMode#Code!$",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "PlrMode",
                "field": "Code"
            },
            "appendField": {
                "file": "PlrMode",
                "field": "Name"
            }
        },
        {
            "name": "monanim",
            "description": "Controls the animation mode that the monster will use when using this skill. This is similar to the $!#anim!$ field except with monster units using the skill instead of player units. Uses a $!MonMode#code!$",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "MonMode",
                "field": "code"
            },
            "appendField": {
                "file": "MonMode",
                "field": "name"
            }
        },
        {
            "name": "seqnum",
            "description": "If the unit is a player and the $!#anim!$ used for the skill is a Sequence, then this field will control the index of which sequence animation to use. These sequences are specifically designed for certain skills, and each sequence has a set number of frames using certain animations.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "Do nothing"
                ],
                [
                    "1",
                    "Jab"
                ],
                [
                    "2",
                    "Sacrifice"
                ],
                [
                    "3",
                    "Chastise"
                ],
                [
                    "4",
                    "Charge"
                ],
                [
                    "5",
                    "Defiance"
                ],
                [
                    "6",
                    "Inferno"
                ],
                [
                    "7",
                    "Strafe"
                ],
                [
                    "8",
                    "Impale"
                ],
                [
                    "9",
                    "Fend"
                ],
                [
                    "10",
                    "Whirlwind"
                ],
                [
                    "11",
                    "Double Swing"
                ],
                [
                    "12",
                    "Lightning"
                ],
                [
                    "13",
                    "Leap"
                ],
                [
                    "14",
                    "Leap Attack"
                ],
                [
                    "15",
                    "Double Throw"
                ],
                [
                    "16",
                    "Tiger Fist"
                ],
                [
                    "17",
                    "Projection"
                ],
                [
                    "18",
                    "Arctic Blast"
                ],
                [
                    "19",
                    "Triple Kick"
                ],
                [
                    "20",
                    "Dragon Breath"
                ],
                [
                    "21",
                    "Dragon Flight"
                ],
                [
                    "22",
                    "Druid Unmorph"
                ],
                [
                    "23",
                    "Assassin Blade Fury"
                ],
                [
                    "24",
                    "Cleave"
                ],
                [
                    "25",
                    "Mirrored Blades"
                ],
                [
                    "26",
                    "Bind Demon"
                ]
            ]
        },
        {
            "name": "seqinput",
            "description": "For skills that can repeat, this controls the number of frames to wait before the \"Do\" frame in the sequence. This acts as a delay in frames (25 Frames = 1 second) to wait within the sequence animation before it is allowed to be cast again or for looping back to the start of the sequence, such as for the Sorceress Inferno skill.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "durability",
            "description": "Boolean Field. If equals 1 and when the player character ends an animation mode that was not Attack 1, Attack 2, or Throw, then check the quantity and durability of the player's items to see if the valid weapons are out of ammo or are broken. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "UseAttackRate",
            "description": "Boolean Field. If equals 1, then the current attack speed should be updated after using the skill, relative to the \"attackrate\" stat (See $!ItemStatCost!$), and if the skill was an attacking skill. If equals 0, then the attack speed will not be updated after using the skill.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "LineOfSight",
            "description": "Controls the skill's collision filters for valid target locations when it is being cast",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "No collision filter"
                ],
                [
                    "1",
                    "Missile Barrier"
                ],
                [
                    "2",
                    "Player Path - Walls, no pathing, objects, doors, no player pathing"
                ],
                [
                    "3",
                    "Player Monster - Monsters, Players"
                ],
                [
                    "4",
                    "Player Flying - Missile barriers, doors"
                ],
                [
                    "5",
                    "Radial Barrier - Missile barriers, doors, walls"
                ]
            ]
        },
        {
            "name": "TargetableOnly",
            "description": "Boolean Field. If equals 1, then the skill will require a target unit in order to be used. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SearchEnemyXY",
            "description": "Boolean Field. If equals 1, then when the skill is cast on a target location, it will automatically search in different directions in the target area to find the first available enemy target. If equals 0, then ignore this. This field can be overridden if the $!#SearchEnemyNear!$ field is enabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SearchEnemyNear",
            "description": "Boolean Field. If equals 1, then when the skill is cast on a target location, it will automatically find the nearest enemy target. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SearchOpenXY",
            "description": "Boolean Field. If equals 1, then automatically search in a radius of size 7 in around the clicked target location to find an available unoccupied location to use the skill, testing for collision. If equals 0, then ignore this. This field can be overridden if the $!#SearchEnemyNear!$ or $!#SearchEnemyXY!$ field is enabled.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SelectProc",
            "description": "Uses a function to check that the target is a corpse with various parameters before validating the usage of the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Description"
                ],
                [
                    "0",
                    "",
                    ""
                ],
                [
                    "1",
                    {
                        "id": "CorpseExplode",
                        "text": "CorpseExplode"
                    },
                    "Check that the target is a corpse"
                ],
                [
                    "2",
                    {
                        "id": "RaiseSkeleton",
                        "text": "RaiseSkeleton"
                    },
                    "Check that the target is a monster corpse, and that the corpse was a unit that has a velocity (if the unit does not move, then the corpse cannot be used)"
                ],
                [
                    "3",
                    {
                        "id": "Revive",
                        "text": "Revive"
                    },
                    "Use the $!#RaiseSkeleton!$ function (Code = 2) and that the monser has a switchable AI"
                ],
                [
                    "4",
                    {
                        "id": "HeartMonster",
                        "text": "HeartMonster"
                    },
                    "Check that the target is a monster corpse and that the monster has the $!monstats2#soft!$ flag enabled"
                ],
                [
                    "5",
                    {
                        "id": "ItemMonster",
                        "text": "ItemMonster"
                    },
                    "Check that the target is a monster corpse"
                ],
                [
                    "6",
                    {
                        "id": "WardMonster",
                        "text": "WardMonster"
                    },
                    "Check that the target is a monster corpse and that the monster has the $!monstats#soft!$ flag enabled"
                ]
            ]
        },
        {
            "name": "TargetCorpse",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target corpses. If equals 0, then skill cannot target corpses.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TargetPet",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target pets (summons and mercenaries). If equals 0, then the skill cannot target pets.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TargetAlly",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target ally units. If equals 0, then the skill cannot target ally units.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TargetItem",
            "description": "Boolean Field. If equals 1, then the skill is allowed to target items on the ground. If equals 0, then the skill cannot target items.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "AttackNoMana",
            "description": "Boolean Field. If equals 1, then then when the caster does not have enough mana to cast the skill and attempts to use the skill, the caster will default to using the Attack skill. If equals 0, then attempting to use the skill without enough mana will do nothing.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "TgtPlaceCheck",
            "description": "Boolean Field. If equals 1, then check that the target location is available for spawning a unit, testing collision. If equals 0, then ignore this. This is only used for skills that monsters use to spawn new units.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "KeepCursorStateOnKill",
            "description": "Boolean Field. If equals 1, then the mouse click hold state will continue to stay active after killing a selected target. If equals 0, then after killing the target, the mouse click hold state will reset.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ContinueCastUnselected",
            "description": "Boolean Field. If equals 1, then while the mouse is held down and there is no more target selected, then the skill will continue being used at the mouse's location. If equals 0, then while the mouse is held down and there is no more target selected, then the player character will cancel the skill and move to the mouse location.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ClearSelectedOnHold",
            "description": "Boolean Field. If equals 1, then when the mouse is held down, the target selection will be cleared. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemEffect",
            "description": "Uses a Server Do function (See $!#srvdofunc!$) for handling how the skill is used when it is triggered by an item, on the server side.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "ItemCltEffect",
            "description": "Uses a Client Do function (See $!#cltdofunc!$) for handling how the skill is used when it is triggered by an item, on the client side.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "ItemTgtDo",
            "description": "Boolean Field. If equals 1, then use the skill from the enemy target instead of the caster. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemTarget",
            "description": "Controls the targeting behavior of the skill when it is triggered by an item.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "Default to targeting the attacker"
                ],
                [
                    "1",
                    "Target the caster"
                ],
                [
                    "2",
                    "Target a random location in a radius with a size of 20. Also tests collision."
                ],
                [
                    "3",
                    "Target a random nearby corpse"
                ],
                [
                    "4",
                    "Target the attacker, and if that attacker is not found then target a previous attacker or the previous attacker's location"
                ]
            ]
        },
        {
            "name": "ItemUseRestrict",
            "description": "Boolean Field. If equals 1, then use the state restriction defined in the $!#restrict!$ field when being triggered by an item.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemCheckStart",
            "description": "Boolean Field. If equals 1, then use the skill's Server Start function (See $!#srvstfunc!$) when the skill is trigged by an item. If equals 0, then the skill's Server Start function is ignored.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemCltCheckStart",
            "description": "Boolean Field. If equals 1, then when the skill is triggered by an item, and if the target is dead and the skill has a Client Start function (See $!#cltstfunc!$), then add the \"corpse_noselect\" flag to the target. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ItemCastSound",
            "description": "Play a sound when the skill is used by an item event.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "ItemCastOverlay",
            "description": "Add a cast overlay when the skill is used by an item event.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "skpoints",
            "description": "Controls the number of Skill Points needed to level up the skill",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "reqlevel",
            "description": "Minimum character level required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "maxlvl",
            "description": "Maximum base level for the skill from spending Skill Points. Skill levels can be increased beyond this through item modifiers.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqstr",
            "description": "Minimum Strength attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqdex",
            "description": "Minimum Dexterity attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqint",
            "description": "Minimum Intelligence attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqvit",
            "description": "Minimum Vitality attribute required to be allowed to spend Skill Points on this skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "reqskill#",
            "altNames": [
                "reqskill1",
                "reqskill2",
                "reqskill3"
            ],
            "description": "Points to a $!#skill!$ field to act as a prerequisite skill. The prerequisite skill must be least base level 1 before the player is allowed to spend Skill Points on this skill.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "restrict",
            "description": "Controls how the skill is used when the unit has a restricted state (See the $!states#restrict!$ field)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "None - The skill cannot be used when the unit has a restricted state"
                ],
                [
                    "1",
                    "Any - The skill can be used in when the unit has any restricted state"
                ],
                [
                    "2",
                    "State Only - The skill can only be used when the unit has a restricted state (See $!#State#!$)"
                ],
                [
                    "3",
                    "Pop State - The skill can be used at any time but when used, it will remove the unit's restrict states"
                ]
            ]
        },
        {
            "name": "State#",
            "altNames": [
                "State1",
                "State2",
                "State3"
            ],
            "description": "Used as parameters for the $!#restrict!$ field to control what specific states will restrict the usage of the skill.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "states",
                "field": "state"
            }
        },
        {
            "name": "localdelay",
            "description": "Controls the Casting Delay duration for this skill after it is used (25 frames = 1 second)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "globaldelay",
            "description": "Controls the Casting Delay duration for all other skills with Casting Delays after this skill is used (25 frames = 1 second)",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "leftskill",
            "description": "Boolean Field. If equals 1, then the skill will appear on the list of skills to assign for the Left Mouse Button. If equals 0, then the skill will not appear on the Left Mouse Button skill list.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "rightskill",
            "description": "Boolean Field. If equals 1, then the skill will appear on the list of skills to assign for the Right Mouse Button. If equals 0, then the skill will not appear on the Right Mouse Button skill list.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "repeat",
            "description": "Boolean Field. If equals 1 and the skill has no $!#anim!$ mode declared, then on the client side, the unit's mode will repeat its current mode (this can also happen if the unit has the \"inferno\" state). If equals 0, then the unit will have its mode set to Neutral when starting to use the skill. Also is used to mark the skill as repeatable in some AIs, like the generic pet ai.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "alwayshit",
            "description": "Boolean Field. If equals 1, then skills that rely on attack rating and defense will ignore those stats and will always hit enemies. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "usemanaondo",
            "description": "Boolean Field. If equals 1, then the skill will consume mana on its do function instead of its start function. If equals 0, then the skill will consume mana on its start function, which is the general case for skills.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "startmana",
            "description": "Controls the required amount of mana to start using the skill. This only works with certain $!#srvstfunc!$ functions such as $!#SorStartInferno!$ (Code = 11) or $!#AssStartBladeFury!$ (Code = 26).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "minmana",
            "description": "Controls the minimum amount of mana to use the skill. This can control skills that reduce in mana cost per level to not fall below this amount.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "manashift",
            "description": "This acts as a multiplicative modifier to control the precision of the mana cost after calculating the total mana cost with the $!#mana!$ and $!#lvlmana fields!$. Mana is calculated in 256ths in code which equals 8 bits. This field acts as a bitwise shift value, which means it will modify the mana value by the power of 2. For example, if this value equals 5 then that means divide the mana value of 256ths by 2^5 = 32 (or multiply the mana by 32/256). A value equal to 8 means 256/256 which means that the mana of 256ths value is not shifted.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "mana",
            "description": "Defines the base mana cost to use the skill at level 1",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "lvlmana",
            "description": "Defines the change in mana cost per skill level gained",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "interrupt",
            "description": "Boolean Field. If equals 1, then the casting the skill will be interruptible such as when the player is getting hit while casting a skill. If equals 0, then the skill should be uninterruptible.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "InTown",
            "description": "Boolean Field. If equals 1, then the skill can be used while the unit is in town. If equals 0, then the skill cannot be used in town.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "aura",
            "description": "Boolean Field. If equals 1, then the skill will be classified as an aura, which will make the skill execute its function periodically (using the $!#perdelay!$ field), based on the if the $!#aurastate!$ state is active. Aura skills will also override a preexisting state if that state matches the skill's $!#aurastate!$ state. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "periodic",
            "description": "Boolean Field. If equals 1, then the skill will execute its function periodically (using the $!#perdelay!$ field), based on the if the $!#aurastate!$ state is active. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "perdelay",
            "description": "Calculation Field. Controls the periodic rate that the skill continuously executes its function. Minimum value equals 5. This field requires $!#periodic!$ or $!#aura!$ field to be enabled.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "finishing",
            "description": "Boolean Field. If equals 1, then the skill will be classified as a finishing move, which can affect how progressive charges are consumed when using the skill and how the skill's description tooltip is displayed. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "prgchargestocast",
            "description": "Controls how many progressive charges are required to cast the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "prgchargesconsumed",
            "description": "Controls how many progressive charges are consumed when the skill attack hits an enemy",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "passive",
            "description": "Boolean Field. If equals 1, then the skill will be treated as a passive, which can mean that the skill will not show up in the skill selection menu and will not run a server do function. If equals 0, then the skill is an active skill that can be used.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "progressive",
            "description": "Boolean Field. If equals 1, then the skill will use the progressive calculations to act as a charge-up skill that will add charges. This is only used for certain skill functions and will generally require the usage of the $!#prgcalc#!$ fields and the $!#aurastat#!$ fields. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "scroll",
            "description": "Boolean Field. If equals 1, then the skill can appear as a scroll version in the skill selection UI, if the skill allows for the scroll mechanics and if the player has the skill's scroll item in the inventory. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "calc#",
            "altNames": [
                "calc1",
                "calc2",
                "calc3",
                "calc4",
                "calc5",
                "calc6"
            ],
            "description": "Calculation Field. It is used as a possible parameter for skill functions or as a numeric input for other calculation fields.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "Param#",
            "altNames": [
                "Param1",
                "Param2",
                "Param3",
                "Param4",
                "Param5",
                "Param6",
                "Param7",
                "Param8",
                "Param9",
                "Param10",
                "Param11",
                "Param12"
            ],
            "description": "Integer Field. It is used as a possible parameter for skill functions or as a numeric input for other calculation fields.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "InGame",
            "description": "Boolean Field. If equals 1, then the skill is enabled to be used in-game. If equals 0, then the skill will be disabled in-game.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ToHit",
            "description": "Baseline bonus Attack Rating that is added to the attack when using this skill at level 1",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "LevToHit",
            "description": "Additional bonus Attack Rating when using this skill, calculated per skill level",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ToHitCalc",
            "description": "Calculation Field. Calculates the bonus Attack Rating when using the skill. This will override the $!#ToHit!$ and $!#LevToHit!$ fields if it is not blank.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "ResultFlags",
            "description": "Controls different flags that can affect how the target reacts after being hit by the skill attack. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 5 (binary = 101) then that returns true for both the 4 (binary = 100) and 1 (binary = 1) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "appendField": {
                "file": "enums",
                "field": "Result Flags"
            }
        },
        {
            "name": "HitFlags",
            "description": "Controls different flags that can affect the damage dealt when the target is hit by the skill. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Hit Flags"
            }
        },
        {
            "name": "HitClass",
            "description": "Defines the skill's damage routines when hitting, mainly used for determining hit sound effects and overlays. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values. There are binary masks to check between Base Hit Classes and Hit Class Layers, which can distinguish bewteen overlays or sounds are displayed.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "enums",
                "field": "Hit Class"
            }
        },
        {
            "name": "Kick",
            "description": "Boolean Field. If equals 1, then a separate function is used to calculate the physical damage dealt by the skill, ignoring the following damage fields. This function will factor in the player character's Strength and Dexterity attributes (or Monster's level) to determine the baseline damage dealt. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "HitShift",
            "description": "Controls the percentage modifier for the skill's damage. This value cannot be less than 0 or greater than 8. This is calculated in 256ths. Used like so: \"damage << $!#HitShift!$\"",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Value",
                    "Description",
                    "Percentage"
                ],
                [
                    "8",
                    "256/256",
                    "100%"
                ],
                [
                    "7",
                    "128/256",
                    "50%"
                ],
                [
                    "6",
                    "64/256",
                    "25%"
                ],
                [
                    "5",
                    "32/256",
                    "12.5%"
                ],
                [
                    "4",
                    "16/256",
                    "6.25%"
                ],
                [
                    "3",
                    "8/256",
                    "3.125%"
                ],
                [
                    "2",
                    "4/256",
                    "1.5625%"
                ],
                [
                    "1",
                    "2/256",
                    ".78125%"
                ],
                [
                    "0",
                    "1/256",
                    ".390625%"
                ]
            ]
        },
        {
            "name": "SrcDam",
            "description": "Controls the percentage modifier for how much weapon damage is transferred to the skill's damage (Out of 128). For example, if the value equals 64, then 50% (64/128) of the weapon's damage will be added to the skill's damage.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MinDam",
            "description": "Minimum baseline physical damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MinLevDam#",
            "altNames": [
                "MinLevDam1",
                "MinLevDam2",
                "MinLevDam3",
                "MinLevDam4",
                "MinLevDam5"
            ],
            "description": "Controls the additional minimum physical damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxDam",
            "description": "Maximum baseline physical damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxLevDam#",
            "altNames": [
                "MaxLevDam1",
                "MaxLevDam2",
                "MaxLevDam3",
                "MaxLevDam4",
                "MaxLevDam5"
            ],
            "description": "Controls the additional maximum physical damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the physical damage dealt by the skill.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "EType",
            "description": "Defines the type of elemental damage dealt by the skill. If this field is empty, then the related elemental fields below will not be used. Types with length use $!#ELen!$",
            "type": {
                "type": "reference",
                "dataLength": 4,
                "memSize": 8,
                "file": "ElemTypes",
                "field": "Code"
            },
            "appendField": {
                "file": "ElemTypes",
                "field": "Code"
            }
        },
        {
            "name": "EMin",
            "description": "Minimum baseline elemental damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMinLev#",
            "altNames": [
                "EMinLev1",
                "EMinLev2",
                "EMinLev3",
                "EMinLev4",
                "EMinLev5"
            ],
            "description": "Controls the additional minimum elemental damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMax",
            "description": "Maximum baseline elemental damage dealt by the skill",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMaxLev#",
            "altNames": [
                "EMaxLev1",
                "EMaxLev2",
                "EMaxLev3",
                "EMaxLev4",
                "EMaxLev5"
            ],
            "description": "Controls the additional maximum elemental damage dealt by the skill, calculated using the leveling formula between 5 level thresholds of the skill's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EDmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the total elemental damage dealt by the skill.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "ELen",
            "description": "The baseline elemental duration dealt by the skill. This is calculated in frame lengths where 25 Frames = 1 second. These fields only apply to appropriate elemental types with a duration.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ELevLen#",
            "altNames": [
                "ELevLen1",
                "ELevLen2",
                "ELevLen3"
            ],
            "description": "Controls the additional elemental duration added by the skill, calculated using the leveling formula between 3 level thresholds of the skill\u00e2\u20ac\u2122s current level. The level thresholds are levels 2-8, 9-16, 17 and beyond. These 3 level thresholds correlate to each field number. These fields only apply to appropriate elemental types with a duration.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "ELenSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the total elemental duration dealt by the skill.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Skill scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "aitype",
            "description": "Controls what the skill's archetype for how the AI will handle using this skill. This mostly affects the mercenary AI, Shadow Warrior AI, and generic pet ai, but some types are used for general AI.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code",
                    "Description"
                ],
                [
                    "0",
                    "None"
                ],
                [
                    "1",
                    "Buff"
                ],
                [
                    "2",
                    "Debuff"
                ],
                [
                    "3",
                    "Summon"
                ],
                [
                    "4",
                    "Melee"
                ],
                [
                    "5",
                    "Ranged"
                ],
                [
                    "6",
                    "Aura"
                ],
                [
                    "7",
                    "Teleport"
                ],
                [
                    "8",
                    "Heal"
                ],
                [
                    "9",
                    "Resurrect"
                ],
                [
                    "10",
                    "Passive"
                ],
                [
                    "11",
                    "Area Range"
                ],
                [
                    "12",
                    "Steal"
                ],
                [
                    "13",
                    "Move Attack"
                ]
            ]
        },
        {
            "name": "aibonus",
            "description": "This is only used with the Shadow Master AI and generic pet ai. This value is a flat integer rating that gets added to the AI's parameters when deciding which skill is most likely to be used next. The higher this value, then the more likely this skill will be used by the AI.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "cost mult",
            "description": "Multiplicative modifier of an item's gold cost, only when the item has a stat modifier with this skill. This will affect the item's buy, sell, and repair costs (Calculated in 1024ths).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "cost add",
            "description": "Flat integer modification of an item's gold cost, only when the item has a stat modifier with this skill. This will affect the item's buy, sell, and repair costs. This is added after the $!#cost mult!$ has modified the costs.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}