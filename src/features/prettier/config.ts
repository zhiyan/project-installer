export const deps = [
  'prettier'
]

export const prettierrc = {
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    }
  ]
}

export const prettierignore = `
**/*.md
**/*.svg
**/*.ejs
**/*.html
package.json
.umi
.umi-production
`

export const files = {
  '.prettierrc': prettierrc,
  '.prettierignore': prettierignore
}