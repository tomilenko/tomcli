import { Command, flags } from '@oclif/command';
import * as _ from 'lodash';
import * as inquirer from 'inquirer';
import { BaseUtil } from '../utils/base.util';
import { Generator } from '../utils/generator';
import { IProjectOptions } from '../models/project';
import { QName, QGenerationTypes } from '../models/choice';
import { GenerateOptions, GenerationChoiceType, GenerationTypesEnum } from '../models/generation';
import { Config } from '../models';
import { Logger } from '../utils/logger.util';

export default class Hello extends Command {
    static description = 'Generate files';

    static examples = [
        `$ tomcli generate`,
    ]

    static flags = {
        help: flags.help({ char: 'h' }),
    }

    static args = [
        { name: 'template', description: 'Generation type name' },
        { name: 'name', description: 'Project name' },
        { name: 'dest', description: 'Destination directory' },
    ];

    private _logger: Logger = new Logger();

    private _options: GenerateOptions = {
        type: Config.GENERATE_FILES,
        name: '',
        customTemplatesUrl: Config.TEMPLATES_URL,
        dest: '',
        template: '',
        autoIndent: false,
        wrapInFolder: false,
        singleFile: true
    };

    async run() {
        const { args, flags } = this.parse(Hello);
        this._options = _.extend(this._options, args);

        if (!this._options.type || !BaseUtil.isValidGenerationType(this._options.template)) {
            await inquirer.prompt([QGenerationTypes]).then((answer: GenerationChoiceType) => {
                this._options.template = answer.template as string
            });
        } else {
            await Object.keys(GenerationTypesEnum).some((key: string, i: number) => {
                if (this._options.template == key.toLowerCase()) {
                    this._options.template = Object.values(GenerationTypesEnum)[i];
                    return true;
                }
            });
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
