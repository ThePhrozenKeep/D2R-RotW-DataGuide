// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["shrines"] = {
    "title": "shrines.txt",
    "overview": "This file controls the functionalities of shrine objects found in area levels.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "Name",
            "description": "Name of the shrine"
        },
        {
            "name": "Code",
            "description": "",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            },
            "table": [
                [
                    "Code ID",
                    "Name",
                    "Parameters",
                    "Description"
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
            "name": "Arg#",
            "altNames": [
                "Arg0",
                "Arg1"
            ],
            "description": "Integer value used as a possible parameter for the $!#Code!$ function",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "Duration in frames",
            "description": "Duration of the effects of the Shrine (Calculated in Frames, where 25 Frames = 1 Second)",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        },
        {
            "name": "reset time in minutes",
            "description": "Controls the amount of time before the Shrine is available to use again. Each value of 1 equals 1200 Frames or 48 seconds. A value of 0 means that the Shrine is a one-time use.",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "StringName",
            "description": "Uses a string to display as the Shrine's name",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "StringPhrase",
            "description": "Uses a string to display as the Shrine's activation phrase when it is used",
            "type": {
                "type": "string",
                "dataLength": 255,
                "memSize": 16
            }
        },
        {
            "name": "effectclass",
            "description": "Used to define the Shrine's archetype which is involved with calculating region stats",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 8
            }
        },
        {
            "name": "LevelMin",
            "description": "Define the earliest area level where the Shrine can spawn. Corresponds to an index for an area level from $!levels!$",
            "type": {
                "type": "int",
                "dataLength": 0,
                "memSize": 32
            }
        }
    ]
}