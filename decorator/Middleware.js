"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const index_1 = require("../index");
/**
 * Registers a new middleware to be registered in the socket.io.
 */
function Middleware(options) {
    return function (object) {
        const metadata = {
            target: object,
            priority: options && options.priority ? options.priority : undefined,
        };
        index_1.defaultMetadataArgsStorage().middlewares.push(metadata);
    };
}
exports.Middleware = Middleware;
//# sourceMappingURL=Middleware.js.map