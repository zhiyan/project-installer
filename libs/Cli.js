"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var Installer_1 = require("./Installer");
var pkg = require('../package.json');
var Cli = /** @class */ (function () {
    function Cli() {
        program
            .version(pkg.version)
            // .option('-C, --chdir <path>', 'change the working directory')
            // .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
            // .option('-T, --no-tests', 'ignore test hook');
            .command('install')
            .alias('i')
            .description('install features for project')
            .action(function () { return new Installer_1.default(); });
    }
    Cli.prototype.run = function (argv) {
        program.parse(argv);
        if (!program.args.length)
            program.help();
    };
    return Cli;
}());
exports.default = Cli;
