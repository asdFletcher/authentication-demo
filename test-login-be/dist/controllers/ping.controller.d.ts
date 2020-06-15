/// <reference types="express" />
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
export declare const UserProfileSchema: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
        };
        email: {
            type: string;
        };
        name: {
            type: string;
        };
    };
};
/**
 * A simple controller to bounce back http requests
 */
export declare class PingController {
    private req;
    constructor(req: Request);
    ping(): object;
    greet(currentUserProfile: UserProfile): Promise<UserProfile>;
}
