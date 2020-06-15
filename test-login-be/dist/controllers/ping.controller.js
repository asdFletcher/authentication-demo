"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = exports.UserProfileSchema = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    greeting: { type: 'string' },
                    date: { type: 'string' },
                    url: { type: 'string' },
                    headers: {
                        type: 'object',
                        properties: {
                            'Content-Type': { type: 'string' },
                        },
                        additionalProperties: true,
                    },
                },
            },
        },
    },
};
exports.UserProfileSchema = {
    type: 'object',
    required: ['id'],
    properties: {
        id: { type: 'string' },
        email: { type: 'string' },
        name: { type: 'string' },
    },
};
/**
 * A simple controller to bounce back http requests
 */
let PingController = class PingController {
    constructor(req) {
        this.req = req;
    }
    // Map to `GET /ping`
    ping() {
        // Reply with a greeting, the current time, the url, and request headers
        return {
            greeting: 'Hello from LoopBack',
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers),
        };
    }
    async greet(currentUserProfile) {
        // (@jannyHou)FIXME: explore a way to generate OpenAPI schema
        // for symbol property
        currentUserProfile.id = currentUserProfile[security_1.securityId];
        delete currentUserProfile[security_1.securityId];
        return currentUserProfile;
    }
};
tslib_1.__decorate([
    rest_1.get('/ping', {
        responses: {
            '200': PING_RESPONSE,
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Object)
], PingController.prototype, "ping", null);
tslib_1.__decorate([
    rest_1.get('/greet', {
        responses: {
            '200': {
                description: 'Greet the logged in user',
                content: {
                    'application/json': {
                        schema: exports.UserProfileSchema,
                    },
                },
            },
        },
    }),
    authentication_1.authenticate('auth0-jwt', { scopes: ['greet'] }),
    tslib_1.__param(0, context_1.inject(security_1.SecurityBindings.USER)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PingController.prototype, "greet", null);
PingController = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    tslib_1.__metadata("design:paramtypes", [Object])
], PingController);
exports.PingController = PingController;
//# sourceMappingURL=ping.controller.js.map