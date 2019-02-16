import * as path from 'path'

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

export const files = [
  {
    name: '.prettierrc',
    content: prettierrc
  },
  {
    name: '.prettierignore'
  }
]