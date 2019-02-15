import {IInstaller} from '.'

export default class EslintInstaller implements IInstaller{
  readonly name = 'eslint';

  install(){
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
    })
  }
}