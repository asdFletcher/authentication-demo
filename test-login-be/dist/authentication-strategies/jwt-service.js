"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTServiceProvider = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const express_jwt_1 = tslib_1.__importDefault(require("express-jwt"));
const types_1 = require("./types");
const jwks = require('jwks-rsa');
let JWTServiceProvider = class JWTServiceProvider {
    constructor(options) {
        this.options = options;
    }
    value() {
        const auth0Config = this.options || {};
        // Use `express-jwt` to verify the Auth0 JWT token
        return express_jwt_1.default({
            secret: jwks.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: auth0Config.jwksUri,
            }),
            audience: auth0Config.audience,
            issuer: auth0Config.issuer,
            algorithms: auth0Config.algorithms || ['RS256'],
            // Customize `getToken` to allow `access_token` query string in addition
            // to `Authorization` header
            getToken: req => {
                var _a;
                if (req.headers.authorization &&
                    req.headers.authorization.split(' ')[0] === 'Bearer') {
                    return req.headers.authorization.split(' ')[1];
                }
                else if ((_a = req.query) === null || _a === void 0 ? void 0 : _a.access_token) {
                    return req.query.access_token;
                }
                return null;
            },
        });
    }
};
JWTServiceProvider = tslib_1.__decorate([
    context_1.bind({ tags: { [context_1.ContextTags.KEY]: types_1.JWT_SERVICE }, scope: context_1.BindingScope.SINGLETON }),
    tslib_1.__param(0, context_1.config({ fromBinding: types_1.KEY })),
    tslib_1.__metadata("design:paramtypes", [Object])
], JWTServiceProvider);
exports.JWTServiceProvider = JWTServiceProvider;
//# sourceMappingURL=jwt-service.js.map