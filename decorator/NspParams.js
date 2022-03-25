"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NspParams = void 0;
const ParamTypes_1 = require("../metadata/types/ParamTypes");
const index_1 = require("../index");
/**
 * Injects parameters of the connected socket namespace.
 */
function NspParams() {
    return function (object, methodName, index) {
        let format = Reflect.getMetadata('design:paramtypes', object, methodName)[index];
        const metadata = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: ParamTypes_1.ParamTypes.NAMESPACE_PARAMS,
            reflectedType: format,
        };
        index_1.defaultMetadataArgsStorage().params.push(metadata);
    };
}
exports.NspParams = NspParams;
//# sourceMappingURL=NspParams.js.map