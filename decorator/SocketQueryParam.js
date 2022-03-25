"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketQueryParam = void 0;
const ParamTypes_1 = require("../metadata/types/ParamTypes");
const index_1 = require("../index");
/**
 * Injects query parameter from the received socket request.
 */
function SocketQueryParam(name) {
    return function (object, methodName, index) {
        let format = Reflect.getMetadata('design:paramtypes', object, methodName)[index];
        const metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.SOCKET_QUERY_PARAM,
            reflectedType: format,
            value: name,
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.SocketQueryParam = SocketQueryParam;
//# sourceMappingURL=SocketQueryParam.js.map