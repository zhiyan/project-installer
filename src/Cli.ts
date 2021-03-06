import * as program from 'commander'
import Installer from './Installer'
const pkg = require('../package.json')

export default class Cli {
  constructor(){
    program
      .version(pkg.version)
      // .option('-C, --chdir <path>', 'change the working directory')
      // .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
      // .option('-T, --no-tests', 'ignore test hook');
  
      .command('install')
      .alias('i')
      .description('install features for project')
      .action(() => new Installer());
  }

  run(argv: string[]){
    program.parse(argv);
    if (!program.args.length) program.help();
  }
}