// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["ObjType"] = {
    "title": "ObjType.txt",
    "overview": "",
    "fields": [
        {
            "name": "Name",
            "description": "",
            "type": {
                "type": "text",
                "length": "31"
            }
        },
        {
            "name": "Token",
            "description": "",
            "type": {
                "type": "text32",
                "length": 4
            }
        }
    ]
}