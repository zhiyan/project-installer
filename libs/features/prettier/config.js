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
exports.prettierignore = "\n**/*.md\n**/*.svg\n**/*.ejs\n**/*.html\npackage.json\n.umi\n.umi-production\n";
exports.files = {
    '.prettierrc': exports.prettierrc,
    '.prettierignore': exports.prettierignore
};
