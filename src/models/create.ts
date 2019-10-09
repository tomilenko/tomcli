export interface TypeChoice {
	name: string;
	value: GenerationTypesEnum;
}

export enum GenerationTypesEnum {
	PROJECT = 'project',
	CONTROLLER = 'controller',
	MODEL = 'model',
	REPOSITORY = 'repository',
	COMPONENT = 'component',
	CLASS = 'class',
}

export const listOfTypes: TypeChoice[] = [
	{ name: 'Project', value: GenerationTypesEnum.PROJECT },
	{ name: 'Controller', value: GenerationTypesEnum.CONTROLLER },
	{ name: 'Model', value: GenerationTypesEnum.MODEL },
	{ name: 'Repository', value: GenerationTypesEnum.REPOSITORY },
	{ name: 'Component', value: GenerationTypesEnum.COMPONENT },
	{ name: 'Class', value: GenerationTypesEnum.CLASS },
];

export declare type IProjectOptions = {
	type?: GenerationTypesEnum;
	name?: string;
	template?: string;
};