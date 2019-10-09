import { Command, flags } from '@oclif/command';
import * as _ from 'lodash';
import * as inquirer from 'inquirer';
import { BaseUtil } from '../utils/base.util';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Generator } from '../utils/generator';
import { IProjectOptions, GenerationTypesEnum } from '../models/create';
import { QProjectList, QProjectsName } from '../models/choice';
import { GenerateOptions } from '../models/generation';
import { Config } from '../models';

export default class Create extends Command {
    static description = 'Create new project';

    static flags = {
        help: flags.help({ char: 'h' }),
    };

    static args = [
        { name: 'template', description: 'Template name' },
        { name: 'name', description: 'Project name' },
    ];

    private _options: GenerateOptions = {
        type: GenerationTypesEnum.PROJECT,
        name: '',
        customTemplatesUrl: Config.TEMPLATES_URL,
        dest: process.cwd(),
        template: '',
        wrapInFolder: true,
    };

    async run() {
        const { args, flags } = this.parse(Create)
        this._options = _.extend(this._options, args);

        if (!this._options.template || !BaseUtil.isProjectTemplateExist(this._options.template)) {
            await inquirer.prompt([QProjectList]).then((answer: IProjectOptions) => this._options.template = answer.template as string);
        }

        if (!this._options.name) {
            await inquirer.prompt([QProjectsName]).then((answer: IProjectOptions) => this._options.name = answer.name as string);
        }

        new Generator(this._options);
    }
}
