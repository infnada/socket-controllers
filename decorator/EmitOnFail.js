"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitOnFail = void 0;
const ResultTypes_1 = require("../metadata/types/ResultTypes");
const index_1 = require("../index");
/**
 * If this decorator is set then after controller action will emit message with the given name after action execution.
 * It will emit message only if controller throw an exception.
 * If result is a Promise then it will wait until promise throw an error and emit a message.
 */
function EmitOnFail(messageName, options) {
    return function (object, methodName) {
        const metadata = {
            target: object.constructor,
            method: methodName,
            type: ResultTypes_1.ResultTypes.EMIT_ON_FAIL,
            value: messageName,
            classTransformOptions: options && options.classTransformOptions ? options.classTransformOptions : undefined,
        };
        index_1.defaultMetadataArgsStorage().results.push(metadata);
    };
}
exports.EmitOnFail = EmitOnFail;
//# sourceMappingURL=EmitOnFail.js.map