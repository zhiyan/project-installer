import EslintInstaller from './eslint'
import PrettierInstaller from './prettier'
import StylelintInstaller from './stylelint'

export const eslint = new EslintInstaller()
export const prettier = new PrettierInstaller()
export const stylelint = new StylelintInstaller()

export interface IFeature{
  name: string;
  install(options: object): void;
}