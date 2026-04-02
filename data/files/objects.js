// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["objects"] = {
    "title": "objects.txt",
    "referenceFiles": [
        "ObjMode"
    ],
    "overview": "This file controls the functionalities of all objects found in area levels. The order of each object defined in this file will convey what ID value it has, and thus should not be changed.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Class",
            "description": "Defines the unique type class of the object which is used to reference this object.",
            "type": {
                "type": "text",
                "dataLength": 47,
                "memSize": 16
            }
        },
        {
            "name": "Name",
            "description": "String key. Used as the display name of the object when being highlighted by the player.",
            "type": {
                "type": "text",
                "dataLength": 31,
                "memSize": 0
            }
        },
        {
            "name": "Token",
            "description": "Determines what files to use to display the graphics of the object.",
            "type": {
                "type": "text",
                "dataLength": 4,
                "memSize": 32
            }
        },
        {
            "name": "Selectable#",
            "altNames": [
                "Selectable0",
                "Selectable1",
                "Selectable2",
                "Selectable3",
                "Selectable4",
                "Selectable5",
                "Selectable6",
                "Selectable7"
            ],
            "description": "Boolean Field. If equals 1, then the object can be selected by the player and highlighted when hovered on by the mouse cursor. If equals 0, then the object cannot be selected and will not highlight when the player hovers the mouse over it. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "SizeX",
            "altNames": [
                "SizeY"
            ],
            "description": "Controls the amount of sub tiles that the object occupies using X and Y coordinates. This is generally used for measuring the object's size when trying to spawn objects in rooms and controlling their distances apart.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "FrameCnt#",
            "altNames": [
                "FrameCnt0",
                "FrameCnt1",
                "FrameCnt2",
                "FrameCnt3",
                "FrameCnt4",
                "FrameCnt5",
                "FrameCnt6",
                "FrameCnt7"
            ],
            "description": "Controls the frame length of the object's mode. If this equals 0, then that mode will be skipped. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "FrameDelta#",
            "altNames": [
                "FrameDelta0",
                "FrameDelta1",
                "FrameDelta2",
                "FrameDelta3",
                "FrameDelta4",
                "FrameDelta5",
                "FrameDelta6",
                "FrameDelta7"
            ],
            "description": "Controls the animation frame rate of how many frames to update per delta (Measured in 256ths). Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 16
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "CycleAnim#",
            "altNames": [
                "CycleAnim0",
                "CycleAnim1",
                "CycleAnim2",
                "CycleAnim3",
                "CycleAnim4",
                "CycleAnim5",
                "CycleAnim6",
                "CycleAnim7"
            ],
            "description": "Boolean Field. If equals 1, then the object's current animation will loop back to play again when it finishes. If equals 0, then the object will generally play the Opened mode after playing the Operating mode. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "Lit#",
            "altNames": [
                "Lit0",
                "Lit1",
                "Lit2",
                "Lit3",
                "Lit4",
                "Lit5",
                "Lit6",
                "Lit7"
            ],
            "description": "Controls the Light Radius distance value for the object. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "BlocksLight#",
            "altNames": [
                "BlocksLight0",
                "BlocksLight1",
                "BlocksLight2",
                "BlocksLight3",
                "BlocksLight4",
                "BlocksLight5",
                "BlocksLight6",
                "BlocksLight7"
            ],
            "description": "Boolean Field. If equals 1, then the object will draw a shadow. If equals 0, then the object will not draw a shadow. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "HasCollision#",
            "altNames": [
                "HasCollision0",
                "HasCollision1",
                "HasCollision2",
                "HasCollision3",
                "HasCollision4",
                "HasCollision5",
                "HasCollision6",
                "HasCollision7"
            ],
            "description": "Boolean Field. If equals 1, then the object will have collision. If equals 0, then the object will not have collision, and units can walk through it. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "IsAttackable0",
            "description": "Boolean Field. If equals 1, then the player can target this object to be attacked, and the player will use the Kick skill when operating the object. If the object has the Class equal to \"CompellingOrb\" or \"SoulStoneForge\", then instead of using the Kick skill, players will use the Attack skill when operating the object. If equals 0, then ignore this, and the player will not use a skill or animation when operating the object.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Start#",
            "altNames": [
                "Start0",
                "Start1",
                "Start2",
                "Start3",
                "Start4",
                "Start5",
                "Start6",
                "Start7"
            ],
            "description": "Controls the frame for where the object will start playing the next animation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "EnvEffect",
            "description": "Boolean Field. If equals 1, then enable the object to update its mode based on the game's time of day. This can mean that when the object is spawned, and it is current day time and the object is in Opened or Operating mode, then it will reset back to Neutral mode. Also, if the current time is dusk, night, or dawn and the object is in Neutral mode, then it will change to Operating mode. If equals 0, then the object will not update its mode based on the time of day.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "IsDoor",
            "description": "Boolean Field. If equals 1, then the object will be treated as a door when the game handles its collision, animation properties, tooltips, and commands. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "BlocksVis",
            "description": "Boolean Field. If equals 1, then the object will block the player's line of sight to see anything beyond the object. If equals 0, then ignore this. This field relies on the $!#IsDoor!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Orientation",
            "description": "Determines the object's orientation type, which can affect mouse selection priority of the object when a unit is being rendered in front of or behind the object (such as a door object covering a unit and how the mouse selection should handle that). This also affects the randomization of the coordinates when spawning the object near the edge of a room.",
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
                    "0 (or other #)",
                    "Center"
                ],
                [
                    "1",
                    "Right"
                ],
                [
                    "2",
                    "Left"
                ]
            ]
        },
        {
            "name": "OrderFlag#",
            "altNames": [
                "OrderFlag0",
                "OrderFlag1",
                "OrderFlag2",
                "OrderFlag3",
                "OrderFlag4",
                "OrderFlag5",
                "OrderFlag6",
                "OrderFlag7"
            ],
            "description": "Controls how the object's sprite is drawn, which can affect how it is displayed in Perspective game camera mode. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
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
                    "Do nothing"
                ],
                [
                    "1",
                    "Flat floor"
                ],
                [
                    "2",
                    "Wall"
                ]
            ],
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "PreOperate",
            "description": "Boolean Field. If equals 1, then enable a random chance that the object will spawn in already in Opened mode. The game will choose a 1/14 chance that this can happen when the object is spawned. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Mode#",
            "altNames": [
                "Mode0",
                "Mode1",
                "Mode2",
                "Mode3",
                "Mode4",
                "Mode5",
                "Mode6",
                "Mode7"
            ],
            "description": "Boolean Field. If equals 1, then confirm that this object has the correlating mode. If equals 0, then this object will not have the correlating mode. This flag can affect how the object functions work. Each field is numbered, correlating to 1 of 8 Object Modes that the object uses (See $!ObjMode#Token!$).",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "appendField": {
                "file": "ObjMode",
                "field": "Token"
            }
        },
        {
            "name": "Xoffset",
            "altNames": [
                "Yoffset"
            ],
            "description": "Controls the offset values in the X and Y directions for the object's visual graphics. This is measured in game pixels.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Draw",
            "description": "Boolean Field. If equals 1, then draw the object's shadows. If equal's 0, then do not draw the object's shadows.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Red",
            "description": "Controls the Red color gradient of the object's Light Radius. This field depends on the $!#Lit#!$ field having a value greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Green",
            "description": "Controls the Green color gradient of the object's Light Radius. This field depends on the $!#Lit#!$ field having a value greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Blue",
            "description": "Controls the Blue color gradient of the object's Light Radius. This field depends on the $!#Lit#!$ field having a value greater than 0.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "COMP",
            "altNames": [
                "HD",
                "TR",
                "LG",
                "RA",
                "LA",
                "RH",
                "LH",
                "SH",
                "S1",
                "S2",
                "S3",
                "S4",
                "S5",
                "S6",
                "S7",
                "S8"
            ],
            "description": "Boolean Field. If equals 1, then the object will be flagged to have a specific composite piece, and the game will use the component system to handle the object's mouse selection collision box. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Field",
                    "Description"
                ],
                [
                    "HD",
                    "Head"
                ],
                [
                    "TR",
                    "Torso"
                ],
                [
                    "LG",
                    "Legs"
                ],
                [
                    "RA",
                    "Right Arm"
                ],
                [
                    "LA",
                    "Left Arm"
                ],
                [
                    "RH",
                    "Right Hand"
                ],
                [
                    "LH",
                    "Left Hand"
                ],
                [
                    "SH",
                    "Shield"
                ],
                [
                    "S1 to S8",
                    "Special 1 to Special 8"
                ]
            ]
        },
        {
            "name": "TotalPieces",
            "description": "Defines the total amount of composite pieces. If this value is greater than 1, then the game will treat the object with the multiple composite piece system, and the player can hover the mouse over and select the object's different components.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "SubClass",
            "description": "Determines the object's class type by declaring a specific value. This is used by the various functions ($!#InitFn!$, $!#OperateFn!$, $!#PopulateFn!$) for knowing how to handle specific types of objects.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "bittable": [
                "Shrine",
                "Obelisk",
                "Portal (with a source & destination",
                "Trappable",
                "Fixed portal",
                "Well",
                "Waypoint",
                "Hidden"
            ]
        },
        {
            "name": "Xspace",
            "altNames": [
                "Yspace"
            ],
            "description": "Controls the X and Y distance delta values between adjacent objects when they are being populated together. This field is only used by the Populate Function ($!#PopulateFn!$) values 3 and 4, for the Add Barrels and Add Crates functions.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "NameOffset",
            "description": "Controls the vertical offset of the name tooltip's position above the object when the object is being selected. This is measured in pixels.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "MonsterOK",
            "description": "Boolean Field. If equals 1, then if a monster operates the object, then the object will run its operate function. If equals 0, then then if a monster operates the object, then the object will not run its operate function.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ShrineFunction",
            "description": "Controls what shrine function to use (See the $!shrines#Code!$ field) when the object is told to do its Skill command.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Restore",
            "description": "Boolean Field. If equals 1, the game will restore the object in an inactive state when the area level repopulates after a player loads back into it. If equals 0, then the game will not restore the object.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Parm#",
            "altNames": [
                "Parm1",
                "Parm2",
                "Parm3",
                "Parm4"
            ],
            "description": "Used as possible parameters for various functions for the object",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Lockable",
            "description": "Boolean Field. If equals 1, then the object will have a random chance to spawn with the locked attribute and have a display tooltip name with the \"lockedchest\" string key. This only works when the object has the Init Function ($!#InitFn!$) value equal to 3. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Gore",
            "description": "Controls if an object should call its Populate function ($!#PopulateFn!$) when it is chosen as an object that can spawn in a room. Objects with a gore value greater than 2 will not be populated in rooms.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Sync",
            "description": "Boolean Field. If equals 1, then the object's animation rate will always match the $!#FrameDelta#!$ field (depending on the object's mode) which means the client and server will have synced animations. If equals 0, then the animation rate will have random visual variation.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Damage",
            "description": "Controls the amount of damage dealt by the object when it performs an Operate Function ($!#OperateFn!$) that deals damage such as triggering a pulse trap or an explosion.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Overlay",
            "description": "Boolean Field. If equals 1, then add and remove an overlay on the object based on its current mode. If equals 0, then ignore this. This field will only work with specific object Classes and will use specific Overlays for those objects.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Object Class",
                    "Overlay"
                ],
                [
                    "SpecialChest100<br>KhalimHeartChest<br>KhalimEyeChest<br>KhalimBrainChest<br>HoradricCubeChest<br>HoradricScrollChest<br>StaffOfKingsChest<br>ConsolationChest",
                    "multigleam"
                ],
                [
                    "SevenTombsReceptacle",
                    "horadric_light"
                ],
                [
                    "TaintedSunShrine",
                    "horadric_light"
                ]
            ]
        },
        {
            "name": "CollisionSubst",
            "description": "Boolean Field. If equals 1, then the game will handle the bounding box around the object for mouse selection. The game will use the object's pixel size and $!#Left!$, $!#Top!$, $!#Width!$, $!#Height!$ field values to determine the collision size. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "Left",
            "description": "Controls the starting X position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Top",
            "description": "Controls the starting Y position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Width",
            "description": "Controls the ending X position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Height",
            "description": "Controls the ending Y position offset value for drawing the bounding collision box around the object for mouse selection. This field depends on the $!#CollisionSubst!$ field being enabled.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "OperateFn",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "PopulateFn",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "InitFn",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "ClientFn",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "RestoreVirgins",
            "description": "Boolean Field. If equals 1, then when the object has been used, the game will not restore the object in an inactive state when the area level repopulates after a player loads back into it. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "BlockMissile",
            "description": "Boolean Field. If equals 1, then missiles can collide with this object. If equals 0, then missiles will ignore and fly through this object.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "DrawUnder",
            "description": "Controls the targeting priority of the object",
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
                    "The object will not change its targeting priority"
                ],
                [
                    "1",
                    "The object's target priority will equal a corpse only when the object is opened"
                ],
                [
                    "2",
                    "The object's target priority always equals a corpse"
                ]
            ]
        },
        {
            "name": "OpenWarp",
            "description": "Boolean Field. If equals 1, then this object will be classified as an object that can be opened to warp to another area, and the UI will be notified to display a tooltip for opening or entering, based on the object's mode. If equals 0, then ignore this.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "AutoMap",
            "description": "Used to display a tile in the Automap to represent the object. Defines which cell number to use in the tile list for the Automap. If this value equals 0, then this object will not display on the Automap. (See $!Automap!$)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}