import * as inquirer from 'inquirer'
import * as AvailableFeatures from './features'
import 'colors'

export interface IAnswersParams {
  features?: string[]
}

export default class Installer {
  [key: string]: any,
  feature: string | undefined;

  constructor(feature?: string){
    this.feature = feature
    this.dispatch()
  }

  dispatch(){
    if(this.feature){
      this[this.feature]()
    }else{
      this.featurePrompt()
    }
  }

  featurePrompt(){
    inquirer
      .prompt({
        name: 'features',
        message: 'Select the features you want to install',
        type: 'checkbox',
        choices: Object.keys(AvailableFeatures)
      })
      .then(async ({features=[]}: IAnswersParams) => {
        for(const feature of features){
          await this.runInstall(feature)
        }
      });
  }

  runInstall(feature: string){
    return new Promise(async resolve => {
      console.log(`开始安装${feature}...`.green)

      // @ts-ignore
      await AvailableFeatures[feature].install()
      resolve()
    })
  }
}