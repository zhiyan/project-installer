"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EslintInstaller = /** @class */ (function () {
    function EslintInstaller() {
        this.name = 'eslint';
    }
    EslintInstaller.prototype.install = function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 2000);
        });
    };
    return EslintInstaller;
}());
exports.default = EslintInstaller;
