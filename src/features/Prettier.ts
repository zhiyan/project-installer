import {IInstaller} from '.'

export default class PrettierInstaller implements IInstaller {
  readonly name = 'prettier';

  install(){
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
    })
  }
}