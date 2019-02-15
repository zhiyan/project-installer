"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebpackInstaller = /** @class */ (function () {
    function WebpackInstaller() {
        this.name = 'webpack';
    }
    WebpackInstaller.prototype.install = function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 2000);
        });
    };
    return WebpackInstaller;
}());
exports.default = WebpackInstaller;
