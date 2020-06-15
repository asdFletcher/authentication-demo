"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTAuthenticationStrategy = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const types_1 = require("./types");
const jwtAuthz = require('express-jwt-authz');
let JWTAuthenticationStrategy = class JWTAuthenticationStrategy {
    constructor(response, metadata, jwtCheck) {
        this.response = response;
        this.metadata = metadata;
        this.jwtCheck = jwtCheck;
        this.name = 'auth0-jwt';
    }
    async authenticate(request) {
        return new Promise((resolve, reject) => {
            this.jwtCheck(request, this.response, (err) => {
                var _a;
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                // If the `@authenticate` requires `scopes` check
                if ((_a = this.metadata.options) === null || _a === void 0 ? void 0 : _a.scopes) {
                    jwtAuthz(this.metadata.options.scopes, { failWithError: true })(request, this.response, (err2) => {
                        if (err2) {
                            console.error(err2);
                            reject(err2);
                            return;
                        }
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        resolve(request.user);
                    });
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    resolve(request.user);
                }
            });
        });
    }
};
JWTAuthenticationStrategy = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.RESPONSE)),
    tslib_1.__param(1, context_1.inject(authentication_1.AuthenticationBindings.METADATA)),
    tslib_1.__param(2, context_1.inject(types_1.JWT_SERVICE)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Function])
], JWTAuthenticationStrategy);
exports.JWTAuthenticationStrategy = JWTAuthenticationStrategy;
//# sourceMappingURL=auth0.js.map