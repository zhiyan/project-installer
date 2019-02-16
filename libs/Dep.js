"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
var sh = require("shelljs");
var Dep = /** @class */ (function () {
    function Dep(deps, options) {
        this.deps = deps.slice();
        this.options = options;
    }
    Dep.prototype.install = function () {
        var _this = this;
        this.deps.forEach(function (packageName) {
            _this.installPackage(packageName);
        });
    };
    Dep.prototype.installPackage = function (packageName) {
        console.log(("Begin to install dependence \"" + packageName + "\"...").green);
        if (this.options.packageManager === 'yarn') {
            sh.exec("yarn add -D " + packageName);
        }
        else {
            sh.exec("npm install --save-dev " + packageName);
        }
    };
    return Dep;
}());
exports.default = Dep;
