"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY = exports.JWT_SERVICE = void 0;
const authentication_1 = require("@loopback/authentication");
const context_1 = require("@loopback/context");
exports.JWT_SERVICE = context_1.BindingKey.create('services.JWTService');
exports.KEY = context_1.BindingKey.create(`${authentication_1.AuthenticationBindings.AUTHENTICATION_STRATEGY_EXTENSION_POINT_NAME}.JWTAuthenticationStrategy`);
//# sourceMappingURL=types.js.map