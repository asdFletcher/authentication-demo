import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    firstName: string;
    surname: string;
    username: string;
    id?: number;
    email: string;
    organization?: object;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
