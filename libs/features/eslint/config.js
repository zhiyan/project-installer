"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deps = [
    'eslint',
    'babel-eslint',
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-plugin-babel',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react',
];
exports.eslintrc = {
    extends: ['airbnb', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true,
    },
    parser: 'babel-eslint',
    plugins: ['react', 'babel'],
    rules: {
        'react/jsx-one-expression-per-line': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-indent': 0,
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: false,
                assignment: false,
            },
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'comma-dangle': ['error', 'always-multiline'],
    },
};
exports.files = {
    '.eslintrc': exports.eslintrc
};
