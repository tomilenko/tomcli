import { Express } from "express";
import { {Name}Controller } from './controllers';

class Routing {

    private app: Express;
    private {name}Controller: {Name}Controller;

    constructor(application: Express) {
        this.app = application;
        this.{name}Controller = new {Name}Controller();
    }

    public defineRoutes = (): void => {
        this.define{Name}Routes();
    }

    private define{Name}Routes = (): void => {
        this.app.get("/", this.{name}Controller.indexAction)
    }
}

export default Routing;