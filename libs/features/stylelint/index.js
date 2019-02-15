"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dep_1 = require("../../Dep");
var Config_1 = require("../../Config");
var conf = require("./config");
var StylelintInstaller = /** @class */ (function () {
    function StylelintInstaller() {
        this.name = 'stylelint';
    }
    StylelintInstaller.prototype.install = function (options) {
        return new Promise(function (resolve) {
            new Dep_1.default(conf.deps, options).install();
            new Config_1.default(conf.files, options).install();
            resolve();
        });
    };
    return StylelintInstaller;
}());
exports.default = StylelintInstaller;
