import { EndpointInfo, IMiddleware, Middleware, Req } from "@tsed/common";
import { Forbidden, Unauthorized } from "ts-httpexceptions";
import { Request } from 'express';

@Middleware()
export class AuthMiddleware implements IMiddleware {
    public use(@Req() request: Request, @EndpointInfo() endpoint: EndpointInfo) {
        // Do some validations
    }
}