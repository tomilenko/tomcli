import * as fs from 'fs-extra';
import * as path from 'path';
import { GenerationTypesEnum } from '../models/generation';

export class BaseUtil {
	public static getProjectList = (): string[] => {
		return fs.readdirSync(
			path.join(__dirname, '../../', 'templates/project')
		);
	};

	public static isProjectTemplateExist = (name: string): boolean => {
		return fs.readdirSync(
			path.join(__dirname, '../../', 'templates/project')
		).some(el => el == name);
	}

	public static isValidGenerationType = (name: string): boolean => {
		return Object.keys(GenerationTypesEnum).some((type: string) => type.toLowerCase() == name);
	}
}
