/// <reference types="express" />
import { AuthenticationMetadata, AuthenticationStrategy } from '@loopback/authentication';
import { ExpressRequestHandler, Request, Response } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
export declare class JWTAuthenticationStrategy implements AuthenticationStrategy {
    private response;
    private metadata;
    private jwtCheck;
    name: string;
    constructor(response: Response, metadata: AuthenticationMetadata, jwtCheck: ExpressRequestHandler);
    authenticate(request: Request): Promise<UserProfile | undefined>;
}
