import { Provider } from '@loopback/context';
import jwt, { RequestHandler } from 'express-jwt';
import { Auth0Config } from './types';
export declare class JWTServiceProvider implements Provider<RequestHandler> {
    private options;
    constructor(options: Auth0Config);
    value(): jwt.RequestHandler;
}
