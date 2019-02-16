import {IFeature} from '..'
import Config from '../../Config'
import * as conf from './config'

export default class GitignoreInstaller implements IFeature{
  readonly name = 'gitignore';

  install(options: object){
    return new Promise(resolve => {
      new Config(conf.files, options).install()
      resolve()
    })
  }
}