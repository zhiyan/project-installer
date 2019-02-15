import {IFeature} from '..'

export default class PrettierInstaller implements IFeature {
  readonly name = 'prettier';

  install(){
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
    })
  }
}