import 'colors'
import * as path from 'path'
import * as fs from 'fs-extra'
import {IOptions} from './Installer'

interface IFiles {
  [key: string]: any
}

export default class Config {
  files: IFiles;
  options: IOptions;
  
  constructor(files: object, options: IOptions){
    this.files = files
    this.options = options
  }

  install(){
    Object.keys(this.files).forEach(fileName => this.installFile(fileName))
    console.log('写入配置文件成功'.green)
  }

  installFile(fileName: string){
    console.log(`开始写入配置文件${fileName}...`.green)
    console.log(path.resolve(process.cwd(), fileName))
    if(/(rc|\.json)$/.test(fileName)){
      fs.outputJsonSync(fileName, this.files[fileName], {spaces: 2})
    }else{
      fs.outputFileSync(fileName, this.files[fileName])
    }
  }
}