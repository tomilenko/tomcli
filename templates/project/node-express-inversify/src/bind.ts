import { Container } from 'inversify';
import { RequestHandler } from 'express';
import { AppService } from './services';

export class Bind {

    private _container: Container;

    constructor() {
        this._container = new Container();
        this.bindService();
        this.bindModel();
        this.bindRepository();
    }

    public getContainer = (): Container => this._container;

    private bindService = () => {
        this._container.bind<AppService>('AppService').to(AppService);
    }

    private bindModel = () => { }
    private bindRepository = () => { }
}