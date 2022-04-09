/**
 * Registers controller's action to be executed just before the client disconnects from the socket.
 * This event is similar to disconnect but is fired a bit earlier, when the Socket#rooms set is not empty yet
 */
export declare function OnDisconnecting(): Function;
