import { Command, flags } from '@oclif/command';
import * as _ from 'lodash';
import * as inquirer from 'inquirer';
import { BaseUtil } from '../utils/base.util';
import { IProjectOptions } from '../models/project';
import { QProjectList, QName } from '../models/choice';
import { Config } from '../models';
import Logger from '@tomilenko/logger';
import Generator, { GenerateOptions } from '@tomilenko/custom-template-generator';

export default class Project extends Command {
    static description = 'Create new project';

    static flags = {
        help: flags.help({ char: 'h' }),
    };

    static args = [
        { name: 'template', description: 'Template name' },
        { name: 'name', description: 'Project name' },
    ];

    private _logger: Logger = new Logger();

    private _options: GenerateOptions = {
        type: 'project',
        name: '',
        customTemplatesUrl: Config.TEMPLATES_URL,
        dest: '',
        template: '',
        autoIndent: false,
        wrapInFolder: true,
    };

    async run() {
        const { args, flags } = this.parse(Project)
        this._options = _.extend(this._options, args);

        if (!this._options.template || !BaseUtil.isProjectTemplateExist(this._options.template)) {
            await inquirer.prompt([QProjectList]).then((answer: IProjectOptions) => this._options.template = answer.template as string);
        }

        if (!this._options.name) {
            await inquirer.prompt([QName]).then((answer: IProjectOptions) => this._options.name = answer.name as string);
        }

        if (!this._options.dest) {
            this._options.dest = process.cwd();
        }

        new Generator(this._options);
    }
}
