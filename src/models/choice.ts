import { listOfTypes } from './create';
import { BaseUtil } from '../utils/base.util';

export const QProjects = {
	name: 'type',
	message: 'Please choose what you want to create',
	type: 'list',
	choices: listOfTypes,
};

export const QProjectsName = {
	name: 'name',
	message: 'Please enter project name: ',
	type: 'input',
};

export const QProjectList = {
	name: 'template',
	type: 'list',
	message: 'What project template would you like to generate?',
	choices: BaseUtil.getProjectList(),
};
