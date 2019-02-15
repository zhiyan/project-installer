import EslintInstaller from './eslint'
import PrettierInstaller from './prettier'
import WebpackInstaller from './webpack'

export const eslint = new EslintInstaller()
export const prettier = new PrettierInstaller()
// export const webpack = new WebpackInstaller()

export interface IFeature{
  name: string;
  install(options: object): void;
}