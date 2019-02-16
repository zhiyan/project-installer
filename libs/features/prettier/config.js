"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deps = [
    'prettier'
];
exports.prettierrc = {
    "singleQuote": true,
    "trailingComma": "es5",
    "printWidth": 100,
    "overrides": [
        {
            "files": ".prettierrc",
            "options": { "parser": "json" }
        }
    ]
};
exports.files = [
    {
        name: '.prettierrc',
        content: exports.prettierrc
    },
    {
        name: '.prettierignore'
    }
];
