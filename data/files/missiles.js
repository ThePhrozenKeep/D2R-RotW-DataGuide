// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["Missiles"] = {
    "title": "Missiles.txt",
    "referenceFiles": [
        "enums",
        "ElemTypes"
    ],
    "overview": "This file controls the different functions for all missiles and their statistics. Missiles are projectiles used throughout the game for attacks, skills, and special effects.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Missile",
            "description": "Defines the unique name ID for the missile, which is how other files can reference the missile. The order of defined missiles will determine their ID numbers, so they should not be reordered.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "pCltDoFunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "",
                    {
                        "id": "",
                        "text": ""
                    },
                    "",
                    ""
                ]
            ]
        },
        {
            "name": "pCltHitFunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "",
                    {
                        "id": "",
                        "text": ""
                    },
                    "",
                    ""
                ]
            ]
        },
        {
            "name": "pSrvDoFunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "",
                    {
                        "id": "",
                        "text": ""
                    },
                    "",
                    ""
                ]
            ]
        },
        {
            "name": "pSrvHitFunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "",
                    {
                        "id": "",
                        "text": ""
                    },
                    "",
                    ""
                ]
            ]
        },
        {
            "name": "pSrvDmgFunc",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "table": [
                [
                    "Code",
                    "Name",
                    "Parameters",
                    "Description"
                ],
                [
                    "0 (or empty)",
                    "",
                    "",
                    "Do nothing"
                ],
                [
                    "",
                    {
                        "id": "",
                        "text": ""
                    },
                    "",
                    ""
                ]
            ]
        },
        {
            "name": "SrvCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pSrvDoFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "Param#",
            "altNames": [
                "Param1",
                "Param2",
                "Param3",
                "Param4",
                "Param5"
            ],
            "description": "Integer field. Used as a parameter for the $!#pSrvDoFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "CltCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pCltDoFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "CltParam#",
            "altNames": [
                "CltParam1",
                "CltParam2",
                "CltParam3",
                "CltParam4",
                "CltParam5"
            ],
            "description": "Integer field. Used as a parameter for the $!#pCltDoFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SHitCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pSrvHitFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "sHitPar#",
            "description": "Integer field. Used as a parameter for the $!#pSrvHitFunc!$ field.",
            "altNames": [
                "sHitPar1",
                "sHitPar2",
                "sHitPar3"
            ],
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "CHitCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pCltHitFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "cHitPar#",
            "altNames": [
                "cHitPar1",
                "cHitPar2",
                "cHitPar3"
            ],
            "description": "Integer field. Used as a parameter for the $!#pCltHitFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DmgCalc1",
            "description": "Numeric calculation field. Used as a parameter for the $!#pSrvDmgFunc!$ field.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "dParam#",
            "altNames": [
                "dParam1",
                "dParam2"
            ],
            "description": "Integer field. Used as a parameter for the $!#pSrvDmgFunc!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Vel",
            "description": "The baseline velocity of the missile, which is the speed at which the missile moves in the game world. This is measured by distance in pixels traveled per frame.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MaxVel",
            "description": "The maximum velocity of the missile. If the missile's current velocity increases (based on other fields), then this field controls how high the velocity is allowed to go.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "VelLev",
            "description": "Adds extra velocity based on the caster unit's level. Each level gained beyond level 1 will add this value to the baseline $!#Vel!$ field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Accel",
            "description": "Controls the acceleration of the missile's movement. A positive value will increase the missile's velocity per frame. A negative value will decrease the missile's velocity per frame. The bigger positive or negative values will cause the velocity to change faster per frame.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Range",
            "description": "Controls the baseline duration that the missile will exist for after it is created. This is measured in frames where 25 Frames = 1 second.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "LevRange",
            "description": "Adds extra duration based on the caster unit's level. Each level gained beyond level 1 will add this value to the baseline $!#Range!$ field."
        },
        {
            "name": "Light",
            "description": "Controls the missile's Light Radius size (measured in grid sub-tiles)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Flicker",
            "description": "If greater than 0, then every 4th frame while the missile is active, the Light Radius will randomly change in size between base size to its base size plus this value (measured in grid sub-tiles)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Red",
            "description": "Controls the red color value of the missile's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Green",
            "description": "Controls the green color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Blue",
            "description": "Controls the blue color value of the monster's Light Radius (Uses a value from 0 to 255)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "InitSteps",
            "description": "The number of frames the missile needs to be alive until it becomes visible on the game client. If the missile's current duration in frame count is less than this value, then the missile will appear invisible.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Activate",
            "description": "The number of frames the missile needs to be alive until it becomes active. If the missile's current duration in frame count is less than this value, then the missile will not collide.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LoopAnim",
            "description": "Boolean Field. If equals 1, then the missile's animation will repeat once the previous animation finishes. If equals 0, then the missile's animation will only play once, which can cause the missile to appear invisible at the end of the animation, but it will still be alive.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CelFile",
            "description": "Defines which DCC missile file to use for the visual graphics of the missile",
            "type": {
                "type": "text",
                "dataLength": 64,
                "memSize": 0
            }
        },
        {
            "name": "animrate",
            "description": "Controls the visual speed of the missile's animation graphics. The overall missile animation rate is calculated as the following: 256 * [$!#animrate!$] / 1024",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "AnimLen",
            "description": "Defines the length of the missile's animation in frames where 25 Frames = 1 second. This field can sometimes be used to calculate the missile animation rate, depending on the missile function used.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "AnimSpeed",
            "description": "Controls the visual speed of the missile's animation graphics on the client side (Measured in 16ths, where 16 equals 1 frame per second). This can be overridden by certain missile functions.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "RandStart",
            "description": "If this value is greater than 0, then the missile will start at a random frame between 0 and this value when it begins its animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "SubLoop",
            "description": "Boolean Field. If equals 1, then the missile will use a specific sequence of its animation while it is alive, depending on its creation. If equals 0, then the missile will not use a sequenced animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SubStart",
            "description": "The starting frame of the sequence animation. This requires that the $!#SubLoop!$ field is enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SubStop",
            "description": "The ending frame of the sequence animation. After reaching this frame, then the sequenced animation will loop back to the $!#SubStart!$ frame. This requires that the $!#SubLoop!$ field is enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CollideType",
            "description": "Defines the missile's collision type, which controls what units, objects, or parts of the environment that the missile can impact",
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
                    "No collision"
                ],
                [
                    "1",
                    "Player unit collision"
                ],
                [
                    "2",
                    "Monster unit collision"
                ],
                [
                    "3",
                    "Player and Monster unit collision"
                ],
                [
                    "4",
                    "No collision"
                ],
                [
                    "5",
                    "Monster unit collision"
                ],
                [
                    "6",
                    "Barrier collision, such as doors"
                ],
                [
                    "7",
                    "Missile collision"
                ],
                [
                    "8",
                    "Player, Monster, Barrier, and Wall collision"
                ]
            ]
        },
        {
            "name": "CollideKill",
            "description": "Boolean Field. If equals 1, then the missile will be destroyed when it collides with something. If equals 0, then the missile will not be destroyed when it collides with something.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CollideFriend",
            "description": "Boolean Field. If equals 1, then the missile can collide with friendly units, including the caster. If equals 0, then the missile will ignore friendly units.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LastCollide",
            "description": "Boolean Field. If equals 1, then the missile will track the last unit that it collided with, which is useful for making sure the missile does not hit the same unit twice. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Collision",
            "description": "Boolean Field. If equals 1, then the missile will have a missile type path placement collision mask when it is initialized or moved. If equals 0, then the missile will have no placement collision mask when it is created or moved.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ClientCol",
            "description": "Boolean Field. If equals 1, then the missile will check collision on the client, depending on the missile's $!#CollideType!$ field. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ClientSend",
            "description": "Boolean Field. If equals 1, then the server will create the missile on the client. This can be used when reloading area levels or transitioning units between areas. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NextHit",
            "description": "Boolean Field. If equals 1, then the missile will use the next delay. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NextDelay",
            "description": "Controls the delay in frame length until this and any other missiles from the same skill cast are allowed to hit the same unit again. This field relies on the $!#NextHit!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "xoffset",
            "altName": [
                "yoffset",
                "zoffset"
            ],
            "description": "Specifies the X, Y, and Z location coordinates (measured in pixels) to offset to visually draw the missile based on its actual location. This will only offset the visual graphics of the missile, not the missile itself. The Z axis controls the visual height of the missile.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            }
        },
        {
            "name": "Size",
            "description": "Defines the diameter in sub-tiles (for both the X and Y axis) that the missile will occupy. This affects how the missile will collide with something or how the game will handle placement for the missile.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SrcTown",
            "description": "Boolean Field. If equals 1, then the missile will be destroyed if the caster unit is located in an act town. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "CltSrcTown",
            "description": "If this value is greater than 0 and the $!#LoopAnim!$ field is disabled, then this field will control which frame to set the missile's animation when the player is in town. This value gets subtracted from the $!#AnimLen!$ value to determine the frame to set the missile's animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "CanDestroy",
            "description": "Boolean Field. If equals 1, then the missile can be attacked and destroyed. If equals 0, then the missile cannot be attacked.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ToHit",
            "description": "Boolean Field. If equals 1, then this missile will use the caster's Attack Rating stat to determine if the missile should hit its target. If equals 0, then the missile will always hit its target.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "AlwaysExplode",
            "description": "Boolean Field. If equals 1, then the missile will always process an explosion when it is killed, which can use a server hit function (See $!#pSrvHitFunc!$) and can use the $!#HitSound!$ and $!#ExplosionMissile!$ fields on the client side. If equals 0, then the missile will only rely on proper collision hits to process an explosion.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Explosion",
            "description": "Boolean Field. If equals 1, then the missile will be classified as an explosion which will make it use different handlers for finding nearby units and dealing damage. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Town",
            "description": "Boolean Field. If equals 1, then the missile is allowed to be alive when in a town area. If equals 0, then the missile will be immediately destroyed when located within a town area.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NoUniqueMod",
            "description": "Boolean Field. If equals 1, then the missile will not receive bonuses from Unique monster modifiers. If equals 0, then the missile will receive bonuses from Unique monster modifiers.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "NoMultiShot",
            "description": "Boolean Field. If equals 1, then the missile will not be affected by the Multi-Shot monster modifier. If equals 0, then the missile will be affected by the Multi-Shot monster modifier.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Holy",
            "description": "Controls a bit field flag where each value is a code to allow the missile to damage a certain type of monster. Leave blank to damage all units.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "bittable": [
                "Only damage Undead",
                "Only damage Demons",
                "Only damage Beasts"
            ]
        },
        {
            "name": "CanSlow",
            "description": "Boolean Field. If equals 1, then the missile can be affected by the \"slowmissiles\" state (See $!states!$). If equals 0, then the missile will ignore the \"slowmissiles\" state.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "ReturnFire",
            "description": "Boolean Field. If equals 1, then missile can trigger the Sorceress Chilling Armor event function. If equals 0, then this missile will not trigger that function.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "GetHit",
            "description": "Boolean Field. If equals 1, then the missile will cause the target unit to enter the Get Hit mode (GH), which acts as the hit recovery mode. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SoftHit",
            "description": "Boolean Field. If equals 1, then the missile will cause a soft hit on the unit, which can trigger a blood splatter effect, hit flash, and/or a hit sound. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "KnockBack",
            "description": "Controls the percentage chance (out of 100) that the target unit will be knocked back when hit by the missile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Trans",
            "description": "Controls the alpha mode for how the missile is displayed, which can affect transparency and blending",
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
                    "No Transparency"
                ],
                [
                    "1",
                    "Black Alpha Transparency"
                ],
                [
                    "2",
                    "White Alpha Transparency"
                ]
            ]
        },
        {
            "name": "Pierce",
            "description": "Boolean Field. If equals 1, then allow the Pierce modifier function to work with this missile. If equals 0, then do not allow Pierce to work with this missile.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "MissileSkill",
            "description": "Boolean Field. If equals 1, then the missile will look up the skill that created it and use that skill's damage instead of the missile damage. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "Skill",
            "description": "This will look up the specified skill's damage and use it for the missile instead of using the missile's defined damage.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "skills",
                "field": "skill"
            }
        },
        {
            "name": "ResultFlags",
            "description": "Controls different flags that can affect how the target reacts after being hit by the missile. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 5 (binary = 101) then that returns true for both the 4 (binary = 100) and 1 (binary = 1) bit field values.",
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
            "description": "Controls different flags that can affect the damage dealt when the target is hit by the missile. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
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
            "name": "HitShift",
            "description": "Controls the percentage modifier for the missile's damage. This value cannot be less than 0 or greater than 8. This is calculated in 256ths, where 8=256/256, 7=128/256, 6=64/256, 5=32/256, 4=16/256, 3=8/256, 2=4/256, 1=2/256, and 0=1/256.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ApplyMastery",
            "description": "Boolean Field. If equals 1, then apply the caster's elemental mastery bonus modifiers to the missile's elemental damage. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SrcDamage",
            "description": "Controls how much of the source unit's damage should be added to the missile's damage. This is calculated in 128ths and acts as a percentage modifier for the source unit's damage that added to the missile. If equals -1 or 0, then the source damage is not included.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Half2HSrc",
            "description": "Boolean Field. If equals 1 and the source unit is currently wielding a 2-Handed weapon, then the source damage (see $!#SrcDamage!$) is reduced by 50%. If equals 0, then ignore this.",
            "type": {
                "type": "boolean",
                "dataLength": 0,
                "memSize": 0
            }
        },
        {
            "name": "SrcMissDmg",
            "description": "If the missile was created by another missile, then this controls how much of the source missile's damage should be added to this missile's damage. This is calculated in 128ths and acts as a percentage modifier for the source missile's damage that added to this missile. If equals 0, then the source damage is not included.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "MinDamage",
            "description": "Minimum baseline physical damage dealt by the missile",
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
            "description": "Controls the additional minimum physical damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxDamage",
            "description": "Maximum baseline physical damage dealt by the missile",
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
            "description": "Controls the additional maximum physical damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "DmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the physical damage dealt by the missile based on specified skill levels.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "EType",
            "description": "Defines the type of elemental damage dealt by the missile. If this field is empty, then the related elemental fields below will not be used. Any type that has length uses the $!#ELen!$ field.",
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
            "description": "Minimum baseline elemental damage dealt by the missile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MinELev#",
            "altNames": [
                "MinELev1",
                "MinELev2",
                "MinELev3",
                "MinELev4",
                "MinELev5"
            ],
            "description": "Controls the additional minimum elemental damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field number.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EMax",
            "description": "Maximum baseline elemental damage dealt by the missile",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MaxELev#",
            "altNames": [
                "MaxELev1",
                "MaxELev2",
                "MaxELev3",
                "MaxELev4",
                "MaxELev5"
            ],
            "description": "Controls the additional maximum elemental damage dealt by the missile, calculated using the leveling formula between 5 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17-22, 23-28, 29 and beyond. These 5 level thresholds correlate to each field.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "EDmgSymPerCalc",
            "description": "Calculation Field. Determines the percentage increase to the elemental damage dealt by the missile based on specified skill levels.",
            "type": {
                "type": "parse",
                "dataLength": 255,
                "memSize": 0,
                "description": "Missile scope BBE. See <a href=\"../docs/bbe-calc.html\" target=\"_blank\" class=\"reference-link\">BBE/Calc Fields</a>"
            }
        },
        {
            "name": "ELen",
            "description": "The baseline elemental duration dealt by the missile. This is calculated in frame lengths where 25 Frames = 1 second. These fields only apply to appropriate elemental types with a duration.",
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
            "description": "Controls the additional elemental duration added by the missile, calculated using the leveling formula between 3 level thresholds of the missile's current level. The level thresholds are levels 2-8, 9-16, 17 and beyond. These 3 level thresholds correlate to each field. These fields only apply to appropriate elemental types with a duration.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "HitClass",
            "description": "Defines the missil's own hit class into the damage routines, mainly used for determining hit sound effects and overlays. This field only handles the hit class layers, so values beyond these defined bits are ignored. Uses an integer value to check against different bit fields by using the \"&\" operator. For example, if the value equals 6 (binary = 110) then that returns true for both the 4 (binary = 100) and 2 (binary = 10) bit field values.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "enums",
                "field": "Hit Class"
            }
        },
        {
            "name": "NumDirections",
            "description": "The number of directions allowed by the missile, based on the DCC file used (see $!#CelFile!$). This value should be within the power of 2, with a minimum value of 1 or up to a maximum value of 64.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LocalBlood",
            "description": "Boolean Field. If equals 1, then change the color of blood missiles to green. If equals 0, then keep the blood missiles colored the default red.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "DamageRate",
            "description": "Controls the \"damage_framerate\" stat (Calculated in 1024ths), which acts as a percentage multiplier for the physical damage reduction and magic damage reduction stat modifiers, when performing damage resistance calculations. This is only enabled if the value is greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "TravelSound",
            "description": "Used when the missile is created and while it is alive.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "HitSound",
            "description": "Used when the collides with a target.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "ProgSound",
            "description": "Used for a programmed special event based on the client function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "sounds",
                "field": "Sound"
            }
        },
        {
            "name": "ProgOverlay",
            "description": "Used for a programmed special event based on the server or client function.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Overlay",
                "field": "overlay"
            }
        },
        {
            "name": "ExplosionMissile",
            "description": "Used for the missile created on the client when this missile explodes.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "SubMissile#",
            "altNames": [
                "SubMissile1",
                "SubMissile2",
                "SubMissile3"
            ],
            "description": "Used for creating a new missile based on the server function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "HitSubMissile#",
            "altNames": [
                "HitSubMissile1",
                "HitSubMissile2",
                "HitSubMissile3",
                "HitSubMissile4"
            ],
            "description": " Used for a new missile after a collision, based on the server function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "CltSubMissile#",
            "altNames": [
                "CltSubMissile1",
                "CltSubMissile2",
                "CltSubMissile3"
            ],
            "description": "Used for creating a new missile based on the client function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        },
        {
            "name": "CltHitSubMissile#",
            "altNames": [
                "CltHitSubMissile1",
                "CltHitSubMissile2",
                "CltHitSubMissile3",
                "CltHitSubMissile4"
            ],
            "description": "Used for a new missile after a collision, based on the client function used.",
            "type": {
                "type": "reference",
                "dataLength": 47,
                "memSize": 16,
                "file": "Missiles",
                "field": "Missile"
            }
        }
    ]
}