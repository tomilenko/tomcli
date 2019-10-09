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
};