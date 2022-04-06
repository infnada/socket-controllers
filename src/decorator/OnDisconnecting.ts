import { ActionMetadataArgs } from '../metadata/args/ActionMetadataArgs';
import { ActionTypes } from '../metadata/types/ActionTypes';
import { defaultMetadataArgsStorage } from '../index';

/**
 * Registers controller's action to be executed just before the client disconnects from the socket.
 * This event is similar to disconnect but is fired a bit earlier, when the Socket#rooms set is not empty yet
 */
export function OnDisconnecting(): Function {
  return function (object: Object, methodName: string) {
    const metadata: ActionMetadataArgs = {
      target: object.constructor,
      method: methodName,
      type: ActionTypes.DISCONNECTING,
    };
    defaultMetadataArgsStorage().actions.push(metadata);
  };
}
