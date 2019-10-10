import { injectable } from 'inversify';

@injectable()
export class AppService {

    public count = (first: number, second: number): number => first + second;
}