import express from "express";
import bodyParser from "body-parser";
import Routing from './routing';
import cors from 'cors';

const app = express();
// Configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routing = new Routing(app);
routing.defineRoutes();

export default app;