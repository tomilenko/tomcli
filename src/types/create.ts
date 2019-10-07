import { strict } from 'assert';

export declare type IQuestions = {
    type: string
};

export enum ProjectTypesEnum {
    EXPRESS = 'express',
    SMT = 'smt'
}

// export const ProjectTypes: Array<string> = [
//     ProjectTypesEnum.EXPRESS,
//     ProjectTypesEnum.SMT
// ];

export interface Choice {
    name: string,
    value: ProjectTypesEnum.EXPRESS | ProjectTypesEnum.SMT
}

export const listOfProjects: Choice[] = [
    { name: 'Express', value: ProjectTypesEnum.EXPRESS },
    { name: 'Smt', value: ProjectTypesEnum.SMT }
]

export interface ProjectTypeChoice {
    name: string,
    value: ProjectTypesEnum.EXPRESS | ProjectTypesEnum.SMT
}

export enum TemplatesUrl {
    EXPRESS = "https://github.com/tomilenko/node-express-ts-template",
    SMT = ""
}
