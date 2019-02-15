import {IFeature} from '..'

export default class WebpackInstaller implements IFeature {
  readonly name = 'webpack';

  install(){
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
    })
  }
}