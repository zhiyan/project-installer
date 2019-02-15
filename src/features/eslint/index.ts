import {IFeature} from '..'

export default class EslintInstaller implements IFeature{
  readonly name = 'eslint';

  install(){
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
    })
  }
}