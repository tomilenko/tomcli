export declare type GenerateOptions = {
    type: string,
    template: string;
    name: string;
    customTemplatesUrl: string;
    dest: string;
    autoIndent?: boolean;
    data?: JSON;
    wrapInFolder?: boolean;
    autoIndentExtensions?: Array<String>;
    singleFile?: boolean | false
};

export interface TypeChoice {
    name: string;
    value: string;
}

export enum GenerationTypesEnum {
    CONTROLLER = 'controller',
    MODEL = 'model',
    REPOSITORY = 'repository',
    COMPONENT = 'component',
    CLASS = 'class',
}

export const listOfTypes: TypeChoice[] = [
    { name: 'Controller', value: GenerationTypesEnum.CONTROLLER },
    { name: 'Model', value: GenerationTypesEnum.MODEL },
    { name: 'Repository', value: GenerationTypesEnum.REPOSITORY },
    { name: 'Class', value: GenerationTypesEnum.CLASS },
];

export enum ClassEnum {
    DEFAULT = '{project}.ts'
}

export type GenerationChoiceType = {
    type?: GenerationTypesEnum,
    name?: string
}
