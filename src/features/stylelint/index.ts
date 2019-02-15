import {IFeature} from '..'
import Dep from '../../Dep'
import Config from '../../Config'
import * as conf from './config'

export default class StylelintInstaller implements IFeature{
  readonly name = 'stylelint';

  install(options: object){
    return new Promise(resolve => {
      new Dep(conf.deps, options).install()
      new Config(conf.files, options).install()
      resolve()
    })
  }
}