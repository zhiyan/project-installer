"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eslint_1 = require("./eslint");
var prettier_1 = require("./prettier");
var webpack_1 = require("./webpack");
exports.eslint = new eslint_1.default();
exports.prettier = new prettier_1.default();
exports.webpack = new webpack_1.default();
