"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eslint_1 = require("./eslint");
var prettier_1 = require("./prettier");
var stylelint_1 = require("./stylelint");
var gitignore_1 = require("./gitignore");
exports.eslint = new eslint_1.default();
exports.prettier = new prettier_1.default();
exports.stylelint = new stylelint_1.default();
exports.gitignore = new gitignore_1.default();
