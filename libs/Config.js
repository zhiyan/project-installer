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
        Object.keys(this.files).forEach(function (fileName) { return _this.installFile(fileName); });
        console.log('写入配置文件成功'.green);
    };
    Config.prototype.installFile = function (fileName) {
        console.log(("\u5F00\u59CB\u5199\u5165\u914D\u7F6E\u6587\u4EF6" + fileName + "...").green);
        console.log(path.resolve(process.cwd(), fileName));
        if (/(rc|\.json)$/.test(fileName)) {
            fs.outputJsonSync(fileName, this.files[fileName], { spaces: 2 });
        }
        else {
            fs.outputFileSync(fileName, this.files[fileName]);
        }
    };
    return Config;
}());
exports.default = Config;
