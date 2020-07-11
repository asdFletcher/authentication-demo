"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/context';
const rest_1 = require("@loopback/rest");
var request = require('request');
const axios = require('axios');
const getAuth0ManagementApiToken = async () => {
    const clientId = process.env.AUTH0_CLIENT_ID;
    const clientSecret = process.env.AUTH0_CLIENT_SECRET;
    const domain = `https://auth0-test-auth.us.auth0.com`;
    const grantType = `client_credentials`;
    const audience = `${domain}/api/v2/`;
    const managementApiTokenURL = `${domain}/oauth/token`;
    const options = {
        url: managementApiTokenURL,
        headers: { 'content-type': 'application/json' },
        data: {
            client_id: clientId,
            client_secret: clientSecret,
            audience: audience,
            grant_type: grantType,
        },
    };
    const res = await axios.post(options.url, options.data, options.headers);
    const tokenData = res.data;
    const accessToken = tokenData.access_token;
    // const scope = tokenData.scope;
    // const expiresIn = tokenData.expires_in;
    return accessToken;
};
class HelloController {
    constructor() { }
    async hello() {
        const token = await getAuth0ManagementApiToken();
        console.log('accessToken:  ', token);
        // var options2 = {
        //   method: 'GET',
        //   url:
        //     'https://auth0-test-auth.us.auth0.com/api/v2/users/auth0|5ee5c96229a5ba0b6f55ff44',
        //   headers: {
        //     authorization:
        //       'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IndLREhCc0VHZ1pudUMzcmJlMFZUTCJ9.eyJpc3MiOiJodHRwczovL2F1dGgwLXRlc3QtYXV0aC51cy5hdXRoMC5jb20vIiwic3ViIjoiY093a3BiRUttWTlOSEJUMFoyV1U1SmI2dkw5MkFiV1hAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXV0aDAtdGVzdC1hdXRoLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTk0NDU2MDMwLCJleHAiOjE1OTQ1NDI0MzAsImF6cCI6ImNPd2twYkVLbVk5TkhCVDBaMldVNUpiNnZMOTJBYldYIiwic2NvcGUiOiJyZWFkOnVzZXJzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.yfiCRGzcH8cir6ROWEDD4ygQpf5FGbkCWxqQ5k0aFLK-ibG9dwSHW366P7AQjf12KZmvKhIr7bF4dhJl3Zq7boJvcbif-8OKEO6TQnueHsE87surGs28X6xvJtMpfoEFDVDd4lJ4lkQ0A8C474OdN4NXTlyoRVd2zBgoBlpOCg49mQ3u3ojxzexuhsWJ3jz9P20jxtA_zKg_IppaS8H2l8WCuWgkkN2v6qL970_vxXCE9YTe5JvI9UfEGkrbmpYaQTpLcftuKzcgtG3Q3rb9f0wNcCwfNQE8yUMzXRorm6E1cHkFay24cyEbRWFNsQ3HvNxXIYOPSv893L_zfJ8PVA',
        //   },
        // };
        // request(options2, function (
        //   error: string | undefined,
        //   response: any,
        //   body: any,
        // ) {
        //   if (error) throw new Error(error);
        //   console.log(body);
        // });
        return 'Hello world!';
    }
}
tslib_1.__decorate([
    rest_1.get('/hello'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], HelloController.prototype, "hello", null);
exports.HelloController = HelloController;
//# sourceMappingURL=hello.controller.js.map