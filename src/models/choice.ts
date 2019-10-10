import { BaseUtil } from '../utils/base.util';
import { listOfTypes } from '../models/generation';

export const QName = {
	name: 'name',
	message: 'Please enter name: ',
	type: 'input',
};

export const QProjectList = {
	name: 'template',
	type: 'list',
	message: 'What project template would you like to create?',
	choices: BaseUtil.getProjectList(),
};

export const QGenerationTypes = {
	name: 'template',
	type: 'list',
	message: 'What type of file/files would you like to generate?',
	choices: listOfTypes
}
