import { Request, Response } from "express";

export class {Name}Controller {

    constructor() { }

    public indexAction = (req: Request, res: Response) => {
        res.json({
            controller: "{Name}Controller"
        });
    }
};