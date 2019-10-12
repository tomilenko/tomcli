import { Request, Response } from "express";

export class {Name}Controller {
    constructor() {}

    public indexAction = async (req: Request, res: Response) => {
        res.json({
            action: "{Name}Controller"
        });
    };
}