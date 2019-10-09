import * as fs from 'fs-extra';
import * as format from 'string-template';
import * as _s from 'underscore.string';
import * as inquirer from 'inquirer';
import * as mkdirp from 'mkdirp';
import * as _ from 'lodash';
import * as path from 'path';
import { js_beautify } from 'js-beautify';
import { GenerateOptions } from '../models/generation';

export class Generator {
    private _files: string[] = [];
    private _templateAbsolutePath: string;
    private _options: GenerateOptions;

    constructor(options: GenerateOptions) {
        this._options = options;
        this._templateAbsolutePath = path.join(
            __dirname,
            '../../',
            options.customTemplatesUrl +
            '/' +
            options.type +
            '/' +
            options.template.toLowerCase()
        );
        const defaultOptions = {
            wrapInFolder: true,
            autoIndent: true,
            autoIndentExtensions: ['js', 'ts'],
        };

        this._options = _.extend(defaultOptions, this._options);
        this.run();
    }

    private run = async () => {
        if (this._options.customTemplatesUrl) {
            this._files = this.getFiles(this._templateAbsolutePath);
        } else {
            throw new Error('Specify the location of the templates folder using the customTemplatesUrl');
        }

        return this.finalize();
    };

	/**
	 * @name getFiles
	 * @description get files inside folder recursively
	 * @param {array} args
	 */
    protected getFiles = (dir: string, files_?: string[]): string[] => {
        if (dir === undefined || !fs.existsSync(dir.toLowerCase())) {
            return [];
        }

        files_ = files_ || [];
        let files = fs.readdirSync(dir);

        for (let i in files) {
            var name = dir + path.sep + files[i];
            if (fs.statSync(name).isDirectory()) {
                this.getFiles(name, files_);
            } else {
                files_.push(name);
            }
        }
        return files_;
    };

	/**
	 * @name generateTemplate
	 * @description generate file template
	 * @param {file} template
	 */
    protected generateTemplate = (templatePath: string) => {
        const absoluteTemplatePath = path.resolve(templatePath);
        let dest = this._options.wrapInFolder
            ? this._options.name + path.sep
            : '';

        // check if the file need a specific location
        if (this._options.dest) {
            dest = this._options.dest + path.sep + dest;
        }

        // console.log('this._options', this._options)
        console.log('dest', dest)

        fs.readFile(
            absoluteTemplatePath,
            'utf8',
            (error: NodeJS.ErrnoException, data: string) => {
                if (error) throw error;
                const templateFilename = absoluteTemplatePath.replace(
                    this._templateAbsolutePath + path.sep,
                    ''
                );
                const templatePathWithoutFileName = templateFilename
                    .substring(0, templateFilename.lastIndexOf(path.sep))
                    .replace(/{project}/g, this._options.name);
                var fileExt = templateFilename
                    ? templateFilename.split('.').pop()
                    : '';

                mkdirp(dest + templatePathWithoutFileName, () => {
                    let injectedData = {
                        name: this._options.name.toLowerCase(),
                        Name: _s.classify(this._options.name),
                        Name_: _.snakeCase(
                            this._options.name
                        ).toUpperCase(),
                        name_: _.snakeCase(this._options.name),
                    };

                    // Inject the data defined through the options.
                    if (this._options.data) {
                        injectedData = _.extend(
                            this._options.data,
                            injectedData
                        );
                    }

                    let formattedData = format(data, injectedData);

                    // will auto indent the whole file
                    if (
                        this._options.autoIndent === true &&
                        _.includes(this._options.autoIndentExtensions, fileExt)
                    ) {
                        formattedData = js_beautify(formattedData);
                    }

                    const fileToWrite = this._options.singleFile
                        ? dest + templateFilename.replace(/{project}/g, this._options.name).split("/").pop()
                        : dest + templateFilename.replace(/{project}/g, this._options.name);

                    fs.writeFile(
                        fileToWrite,
                        formattedData,
                        (error: Error) => {
                            if (error) {
                                return console.log(error);
                            }
                            console.log(
                                '\x1b[32m%s\x1b[0m: ',
                                'Created: ' +
                                fileToWrite
                            );
                        }
                    );
                });
            }
        );
    };

	/**
	 * @name finalize
	 * @description generate files
	 * @param none
	 */
    protected finalize = () => {
        // generate templates
        for (let i = 0; i < this._files.length; i++) {
            this.generateTemplate(this._files[i]);
        }
        return true;
    };
}
