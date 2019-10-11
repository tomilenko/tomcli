import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from '@tsed/common';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import * as path from 'path';

@ServerSettings({
    rootDir: path.resolve(__dirname),
    acceptMimes: ["application/json"]
})
export class Server extends ServerLoader {

    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    public $beforeRoutesInit(): void | Promise<any> {
        this.use(GlobalAcceptMimesMiddleware)
            .use(cookieParser())
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: true }))
            .use(cors());

        return null;
    }

    public $onReady() {
        console.log('Server started...');
    }

    public $onServerInitError(error: Error) {
        console.error(error);
    }
}