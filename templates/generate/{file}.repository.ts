import { Response } from "express";
import { I{Name}, {Name}Model, I{Name}Model } from '../models';

export class {Name}Repository {

    private static instance: {Name}Repository;
    private _{name}Model: I{Name}Model;

    constructor() {
        this._{name}Model = new {Name}Model().model;
    }

    static getInstance = (): {Name}Repository => {
        if (!{Name}Repository.instance) {
            {Name}Repository.instance = new {Name}Repository();
        }

        return {Name}Repository.instance;
    }

    public create{Name} = async (data: I{Name}, res: Response) => {
        return this._{name}Model.create(data).then((data: I{Name}) => res.json(data));
    }
}