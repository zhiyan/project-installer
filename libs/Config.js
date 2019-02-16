"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
var path = require("path");
var fs = require("fs-extra");
var Config = /** @class */ (function () {
    function Config(files, options) {
        this.files = files;
        this.options = options;
    }
    Config.prototype.install = function () {
        var _this = this;
        this.files.forEach(function (file) { return _this.installFile(file); });
    };
    Config.prototype.installFile = function (file) {
        var fileName = file.name, content = file.content;
        console.log(("Begin to create config file \"" + fileName + "\"...").green);
        if (!content) {
            fs.copySync(path.resolve(__dirname, '../assets', fileName), path.resolve(process.cwd(), fileName));
        }
        else if (typeof content === 'object') {
            fs.outputJsonSync(fileName, file, { spaces: 2 });
        }
        else {
            fs.outputFileSync(fileName, file.content);
        }
    };
    return Config;
}());
exports.default = Config;
