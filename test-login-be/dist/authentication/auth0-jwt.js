"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// user service
// takes credentials, returns user
// this.userService.verifyCredentials(credentials)
// takes a user returns a user profile
// returned from userService.convertToUserProfile(user)
// export class BasicAuthenticationStrategy implements AuthenticationStrategy {
//   name = 'auth0-jwt';
// constructor(
//   @inject(UserServiceBindings.USER_SERVICE)
//   private userService: UserService,
// ) {}
// async authenticate(request: Request): Promise<UserProfile | undefined> {
//   const credentials: Credentials = this.extractCredentials(request);
//   const user = await this.userService.verifyCredentials(credentials);
//   const userProfile = this.userService.convertToUserProfile(user);
//   return userProfile;
// }
//   extractCredentials(request: Request): Credentials {
//     let creds: Credentials;
//     /**
//      * Code to extract the 'basic' user credentials from the Authorization header
//      */
//     return creds;
//   }
// }
//# sourceMappingURL=auth0-jwt.js.map