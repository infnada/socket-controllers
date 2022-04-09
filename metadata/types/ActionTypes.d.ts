/**
 * Controller action type.
 */
export declare type ActionType =
  | "message"
  | "connection"
  | "disconnection"
  | "disconnecting";
/**
 * Static access to action types.
 */
export declare class ActionTypes {
  static MESSAGE: ActionType;
  static CONNECT: ActionType;
  static DISCONNECT: ActionType;
  static DISCONNECTING: ActionType;
}
