"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dep_1 = require("../../Dep");
var Config_1 = require("../../Config");
var conf = require("./config");
var EslintInstaller = /** @class */ (function () {
    function EslintInstaller() {
        this.name = 'eslint';
    }
    EslintInstaller.prototype.install = function (options) {
        return new Promise(function (resolve) {
            new Dep_1.default(conf.deps, options).install();
            new Config_1.default(conf.files, options).install();
            resolve();
        });
    };
    return EslintInstaller;
}());
exports.default = EslintInstaller;
