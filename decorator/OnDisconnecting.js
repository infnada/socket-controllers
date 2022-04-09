"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnDisconnecting = void 0;
const ActionTypes_1 = require("../metadata/types/ActionTypes");
const index_1 = require("../index");
/**
 * Registers controller's action to be executed just before the client disconnects from the socket.
 * This event is similar to disconnect but is fired a bit earlier, when the Socket#rooms set is not empty yet
 */
function OnDisconnecting() {
    return function (object, methodName) {
        const metadata = {
            target: object.constructor,
            method: methodName,
            type: ActionTypes_1.ActionTypes.DISCONNECTING,
        };
        index_1.defaultMetadataArgsStorage().actions.push(metadata);
    };
}
exports.OnDisconnecting = OnDisconnecting;
//# sourceMappingURL=OnDisconnecting.js.map