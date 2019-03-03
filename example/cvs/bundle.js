define([
    "./src/CVSModelProvider",
    'legacyRegistry'
], function (
    CVSModelProvider,
    legacyRegistry
) {
    legacyRegistry.register("example/cvs", {
        "name": "CVS",
        "description": "Placeholder for all CVs.",
        "extensions":
        {
            "types": [
                { "key": "cvs.prakash", "name": "Prakash Baskaran", "cssClass": "icon-page", "description": "Prakash Baskaran CV" }
            ],
            "views": [
                { "key": "cvs.prakash", "type": "cvs.prakash", "templateUrl": "templates/prakash.html", "editable": false },
    
            ],
            "roots": [
                {
                    "id": "cvs:home"
                }
            ],
            "models": [
                {
                    "id": "cvs:home",
                    "priority" : "preferred",
                    "model": {
                        "type": "folder",
                        "name": "CVs Home",
                        "location": "ROOT",
                        "composition": [
                            "prakash"
                        ]
                    }
                }
            ],
            "components": [
                {
                    "provides": "modelService",
                    "type": "provider",
                    "implementation": CVSModelProvider,
                    "depends": [
                        "$q"
                    ]
                }
            ],
            "stylesheets": [
                {
                    "stylesheetUrl": "css/cv-espresso.css",
                    "theme": "espresso"
                },
                {
                    "stylesheetUrl": "css/cv-snow.css",
                    "theme": "snow"
                }
            ]
        }
    });
});
