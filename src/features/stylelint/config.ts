export const deps = [
  'stylelint',
  'stylelint-config-recommended',
]


export const stylelintrc = {
  "extends": ["stylelint-config-recommended"],
  "rules": {}
}


export const files = {
  '.stylelintrc': stylelintrc
}