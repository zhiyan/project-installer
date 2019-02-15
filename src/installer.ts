import * as inquirer from 'inquirer'
import * as AvailableFeatures from './features'
import 'colors'

export interface IOptions {
  packageManager?: string;
}

export interface IAnswersParams extends IOptions {
  features?: string[];
}

export default class Installer {
  [key: string]: any,
  options: object;

  constructor(){
    this.options = {}
    this.dispatch()
  }

  dispatch(){
    this.featurePrompt()
  }

  featurePrompt(){
    inquirer
      .prompt([
        {
          name: 'features',
          message: 'Select the features you want to install',
          type: 'checkbox',
          choices: Object.keys(AvailableFeatures)
        },
        {
          name: 'packageManager',
          message: 'Which package manager do you use?',
          type: 'list',
          choices: ['npm', 'yarn']
        }
      ])
      .then(async ({features=[], ...options}: IAnswersParams) => {
        this.options = options
        for(const feature of features){
          await this.runInstall(feature)
        }
        console.log(`全部安装完成!`.blue)
      });
  }

  runInstall(feature: string){
    return new Promise(async resolve => {
      console.log(`开始安装${feature}...`.green)
      // @ts-ignore
      await AvailableFeatures[feature].install(this.options)
      resolve()
    })
  }
}