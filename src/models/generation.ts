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
    value: GenerationTypesEnum;
}

export enum GenerationTypesEnum {
    CONTROLLER = '{file}.controller.ts',
    MODEL = '{file}.model.ts',
    REPOSITORY = '{file}.repository.ts',
    CLASS = '{file}.ts',
}

export const listOfTypes: TypeChoice[] = [
    { name: 'Controller', value: GenerationTypesEnum.CONTROLLER },
    { name: 'Model', value: GenerationTypesEnum.MODEL },
    { name: 'Repository', value: GenerationTypesEnum.REPOSITORY },
    { name: 'Class', value: GenerationTypesEnum.CLASS },
];

export type GenerationChoiceType = {
    template?: GenerationTypesEnum,
    name?: string
}
