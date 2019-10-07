import * as fs from 'fs-extra'
import * as format from 'string-template'
import * as _s from 'underscore.string'
import * as inquirer from 'inquirer'
import * as mkdirp from 'mkdirp'
import * as _ from 'lodash'
// import { }  from 'path-type';
import * as path from 'path'
import { js_beautify } from 'js-beautify'

export declare type GOptions = {
	componentName: string
	customTemplatesUrl: string
	dest: string
	templateName: string
	autoIndent?: boolean
	data?: JSON
	showPrompt?: boolean
	wrapInFolder?: boolean
	autoIndentExtensions?: Array<String>
}

export class Generator {
	private _files: string[] = []
	private _templateAbsolutePath: string
	private _options: GOptions

	constructor(options: GOptions) {
		this._options = options
		this._templateAbsolutePath = path.join(
			__dirname,
			'../..',
			options.customTemplatesUrl +
				'/' +
				options.templateName.toLowerCase()
		)
		const defaultOptions = {
			showPrompt: true,
			wrapInFolder: true,
			autoIndent: true,
			autoIndentExtensions: ['js', 'ts'],
		}

		this._options = _.extend(defaultOptions, this._options)
		this.run()
	}

	private run = async () => {
		if (this._options.customTemplatesUrl) {
			this._files = this.getFiles(this._templateAbsolutePath)
		} else {
			throw new Error(
				'Specify the location of the templates folder using the customTemplatesUrl'
			)
		}

		if (this._options.showPrompt) {
			const answer = await inquirer.prompt([
				{
					type: 'confirm',
					message:
						"Are you sure you want to create '" +
						this._options.componentName +
						"'?",
					name: 'confirmed',
					default: true,
				},
			])

			if (answer.confirmed) {
				return this.finalize()
			}
		} else {
			return this.finalize()
		}
	}

	/**
	 * @name getFiles
	 * @description get files inside folder recursively
	 * @param {array} args
	 */
	private getFiles = (dir: string, files_?: string[]): string[] => {
		if (dir === undefined || !fs.existsSync(dir.toLowerCase())) {
			return []
		}

		files_ = files_ || []
		let files = fs.readdirSync(dir)

		for (let i in files) {
			var name = dir + path.sep + files[i]
			if (fs.statSync(name).isDirectory()) {
				this.getFiles(name, files_)
			} else {
				files_.push(name)
			}
		}
		return files_
	}

	/**
	 * @name generateTemplate
	 * @description generate file template
	 * @param {file} template
	 */
	private generateTemplate = (templatePath: string) => {
		const absoluteTemplatePath = path.resolve(templatePath)
		let dest = this._options.wrapInFolder
			? this._options.componentName + path.sep
			: ''

		// check if the file need a specific location
		if (this._options.dest) {
			dest = this._options.dest + path.sep + dest
		}

		fs.readFile(
			absoluteTemplatePath,
			'utf8',
			(error: NodeJS.ErrnoException, data: string) => {
				if (error) throw error
				const templateFilename = absoluteTemplatePath.replace(
					this._templateAbsolutePath + path.sep,
					''
				)
				const templatePathWithoutFileName = templateFilename
					.substring(0, templateFilename.lastIndexOf(path.sep))
					.replace(/{project}/g, this._options.componentName)
				var fileExt = templateFilename
					? templateFilename.split('.').pop()
					: ''

				mkdirp(dest + templatePathWithoutFileName, () => {
					let injectedData = {
						name: this._options.componentName.toLowerCase(),
						Name: _s.classify(this._options.componentName),
						Name_: _.snakeCase(
							this._options.componentName
						).toUpperCase(),
						name_: _.snakeCase(this._options.componentName),
					}

					// Inject the data defined through the options.
					if (this._options.data) {
						injectedData = _.extend(
							this._options.data,
							injectedData
						)
					}

					let formattedData = format(data, injectedData)

					// will auto indent the whole file
					if (
						this._options.autoIndent === true &&
						_.includes(this._options.autoIndentExtensions, fileExt)
					) {
						formattedData = js_beautify(formattedData)
					}

					fs.writeFile(
						dest +
							templateFilename.replace(
								/{project}/g,
								this._options.componentName
							),
						formattedData,
						(error: Error) => {
							if (error) {
								return console.log(error)
							}
							console.log(
								'\x1b[32m%s\x1b[0m: ',
								'Created: ' +
									dest +
									templateFilename.replace(
										/{project}/g,
										this._options.componentName
									)
							)
						}
					)
				})
			}
		)
	}

	/**
	 * @name finalize
	 * @description generate files
	 * @param none
	 */
	private finalize = () => {
		// generate templates
		for (let i = 0; i < this._files.length; i++) {
			this.generateTemplate(this._files[i])
		}
		return true
	}
}
