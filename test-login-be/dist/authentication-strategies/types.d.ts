import { AuthenticationStrategy } from '@loopback/authentication';
import { BindingKey } from '@loopback/context';
import jwt from 'express-jwt';
export interface Auth0Config {
    jwksUri: string;
    audience: string;
    issuer: string;
    algorithms: string[];
}
export declare const JWT_SERVICE: BindingKey<jwt.RequestHandler>;
export declare const KEY: BindingKey<AuthenticationStrategy>;
