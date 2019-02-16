"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../Config");
var conf = require("./config");
var GitignoreInstaller = /** @class */ (function () {
    function GitignoreInstaller() {
        this.name = 'gitignore';
    }
    GitignoreInstaller.prototype.install = function (options) {
        return new Promise(function (resolve) {
            new Config_1.default(conf.files, options).install();
            resolve();
        });
    };
    return GitignoreInstaller;
}());
exports.default = GitignoreInstaller;
