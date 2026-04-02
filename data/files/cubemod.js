// To let users open the HTML files directly without a local server, we need to eliminate any CORS requests like "fetch".
// Workaround is to place json into .js files and then load them via html script tags.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp
files["cubemod"] = {
    "title": "cubemod.txt",
    "overview": "It seems this file is unused by the game. Reference file that defines different modifiers for cube recipes.<br>Any column field name starting with \"*\" is considered a comment field and is not used by the game.",
    "fields": [
        {
            "name": "cube modifier type",
            "description": "Modifier name"
        },
        {
            "name": "Code",
            "description": "3 letter code for the modifier"
        }
    ]
}