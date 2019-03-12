import 'colors'
import * as path from 'path'
import * as fs from 'fs-extra'
import {IOptions} from './Installer'

interface IFile {
  name: string;
  content?: string | object
}

export default class Config {
  files: IFile[];
  options: IOptions;
  
  constructor(files: IFile[], options: IOptions){
    this.files = files
    this.options = options
  }

  install(){
    this.files.forEach(file => this.installFile(file))
  }

  installFile(file: IFile){
    const {name: fileName, content} = file

    console.log(`Begin to create config file "${fileName}"...`.green)

    if(!content){
      fs.copySync(path.resolve(__dirname, '../assets', fileName), path.resolve(process.cwd(), fileName))
    }else if(typeof content === 'object'){
      fs.outputJsonSync(fileName, file.content, {spaces: 2})
    }else{
      fs.outputFileSync(fileName, file)
    }
  }
}