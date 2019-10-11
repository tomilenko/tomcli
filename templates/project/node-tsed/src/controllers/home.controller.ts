import { Request, Response } from 'express';
import { Controller, Get, UseAuth } from "@tsed/common";
import { HomeService } from '../services';
import { AuthMiddleware } from '../middlewares';

@Controller("/home")
export class HomeController {

    constructor(private homeService: HomeService) { }

    @Get("/")
    index(req: Request, res: Response) {
        res.json({ "action": "index" });
    }

    @Get("/test")
    @UseAuth(AuthMiddleware)
    test(req: Request, res: Response) {
        res.json({ "action": "test" });
    }

}