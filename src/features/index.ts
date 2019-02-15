import EslintInstaller from './Eslint'
import PrettierInstaller from './Prettier'

export const eslint = new EslintInstaller()
export const prettier = new PrettierInstaller()

export interface IInstaller{
  name: string;
  install(): void;
}