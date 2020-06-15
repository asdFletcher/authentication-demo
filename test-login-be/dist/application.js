"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lb4Test1Application = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const authentication_strategies_1 = require("./authentication-strategies");
const auth0_1 = require("./authentication-strategies/auth0");
// import {UserdbDataSource} from './datasources';
const sequence_1 = require("./sequence");
class Lb4Test1Application extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        this.component(authentication_1.AuthenticationComponent);
        this.service(authentication_strategies_1.JWTServiceProvider);
        // Register the Auth0 JWT authentication strategy
        authentication_1.registerAuthenticationStrategy(this, auth0_1.JWTAuthenticationStrategy);
        this.configure(authentication_strategies_1.KEY).to({
            jwksUri: 'https://apitoday.auth0.com/.well-known/jwks.json',
            audience: 'http://localhost:3000/ping',
            issuer: 'https://apitoday.auth0.com/',
            algorithms: ['RS256'],
        });
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.Lb4Test1Application = Lb4Test1Application;
//# sourceMappingURL=application.js.map