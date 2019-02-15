"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrettierInstaller = /** @class */ (function () {
    function PrettierInstaller() {
        this.name = 'prettier';
    }
    PrettierInstaller.prototype.install = function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 2000);
        });
    };
    return PrettierInstaller;
}());
exports.default = PrettierInstaller;
