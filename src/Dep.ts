import 'colors'
import * as sh from 'shelljs'
import {IOptions} from './Installer'

export default class Dep {
  deps: string[];
  options: IOptions;

  constructor(deps: string[], options: IOptions){
    this.deps = [...deps]
    this.options = options
  }

  install(){
    this.deps.forEach(packageName => {
      this.installPackage(packageName)
    })
  }

  installPackage(packageName: string){
    console.log(`Begin to install dependence "${packageName}"...`.green)
    if(this.options.packageManager === 'yarn'){
      sh.exec(`yarn add -D ${packageName}`);
    }else{
      sh.exec(`npm install --save-dev ${packageName}`);
    }
  }
}