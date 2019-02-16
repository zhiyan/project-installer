import EslintInstaller from './eslint'
import PrettierInstaller from './prettier'
import StylelintInstaller from './stylelint'
import GitignoreInstaller from './gitignore'

export const eslint = new EslintInstaller()
export const prettier = new PrettierInstaller()
export const stylelint = new StylelintInstaller()
export const gitignore = new GitignoreInstaller()

export interface IFeature{
  name: string;
  install(options: object): void;
}