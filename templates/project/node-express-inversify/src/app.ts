import * as bodyParser from 'body-parser';
import { Application } from 'express';
import cors from 'cors';
import "reflect-metadata";
import { InversifyExpressServer } from 'inversify-express-utils';
import './controllers';
import { Bind } from './bind';
// set up binding
const bind = new Bind();
// create server
let server = new InversifyExpressServer(bind.getContainer());
server.setConfig((app: Application) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(cors());
});

let app = server.build();
app.listen(process.env.PORT || 3000);