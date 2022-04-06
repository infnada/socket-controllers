/**
 * Controller action type.
 */
export type ActionType = 'message' | 'connection' | 'disconnection' | 'disconnecting';

/**
 * Static access to action types.
 */
export class ActionTypes {
  static MESSAGE: ActionType = 'message';
  static CONNECT: ActionType = 'connection';
  static DISCONNECT: ActionType = 'disconnection';
  static DISCONNECTING: ActionType = 'disconnecting';
}
