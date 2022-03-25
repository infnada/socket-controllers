"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultMetadataArgsStorage = exports.getSocketIO = exports.createSocketServer = exports.useSocketServer = void 0;
const MetadataArgsStorage_1 = require("./metadata-builder/MetadataArgsStorage");
const DirectoryExportedClassesLoader_1 = require("./util/DirectoryExportedClassesLoader");
const SocketControllerExecutor_1 = require("./SocketControllerExecutor");
const container_1 = require("./container");
// -------------------------------------------------------------------------
// Main Functions
// -------------------------------------------------------------------------
/**
 * Registers all loaded actions in your express application.
 */
function useSocketServer(io, options) {
    createExecutor(io, options || {});
    return io;
}
exports.useSocketServer = useSocketServer;
/**
 * Registers all loaded actions in your express application.
 */
function createSocketServer(port, options) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const io = require('socket.io')(port);
    createExecutor(io, options || {});
    return io;
}
exports.createSocketServer = createSocketServer;
/**
 * Gets socket.io instance
 */
function getSocketIO() {
    return getSocketExecutor().io;
}
exports.getSocketIO = getSocketIO;
/**
 * Get socket executor
 */
function getSocketExecutor() {
    return container_1.getFromContainer(SocketControllerExecutor_1.SocketControllerExecutor);
}
/**
 * Registers all loaded actions in your express application.
 */
function createExecutor(io, options) {
    // second import all controllers and middlewares and error handlers
    let controllerClasses;
    if (options && options.controllers && options.controllers.length) {
        controllerClasses = options.controllers.filter(controller => controller instanceof Function);
        const controllerDirs = options.controllers.filter(controller => typeof controller === 'string');
        controllerClasses.push(...DirectoryExportedClassesLoader_1.importClassesFromDirectories(controllerDirs));
    }
    let middlewareClasses;
    if (options && options.middlewares && options.middlewares.length) {
        middlewareClasses = options.middlewares.filter(controller => controller instanceof Function);
        const middlewareDirs = options.middlewares.filter(controller => typeof controller === 'string');
        middlewareClasses.push(...DirectoryExportedClassesLoader_1.importClassesFromDirectories(middlewareDirs));
    }
    // run socket controller register and other operations
    getSocketExecutor().init(io, options).execute(controllerClasses, middlewareClasses);
}
// -------------------------------------------------------------------------
// Global Metadata Storage
// -------------------------------------------------------------------------
/**
 * Gets the metadata arguments storage.
 */
function defaultMetadataArgsStorage() {
    if (!global.socketControllersMetadataArgsStorage)
        global.socketControllersMetadataArgsStorage = new MetadataArgsStorage_1.MetadataArgsStorage();
    return global.socketControllersMetadataArgsStorage;
}
exports.defaultMetadataArgsStorage = defaultMetadataArgsStorage;
// -------------------------------------------------------------------------
// Commonly Used exports
// -------------------------------------------------------------------------
__exportStar(require("./container"), exports);
__exportStar(require("./SocketControllersOptions"), exports);
__exportStar(require("./MiddlewareInterface"), exports);
// decorators
__exportStar(require("./decorator/SocketController"), exports);
__exportStar(require("./decorator/SocketIO"), exports);
__exportStar(require("./decorator/SocketId"), exports);
__exportStar(require("./decorator/SocketRequest"), exports);
__exportStar(require("./decorator/SocketRooms"), exports);
__exportStar(require("./decorator/SocketQueryParam"), exports);
__exportStar(require("./decorator/ConnectedSocket"), exports);
__exportStar(require("./decorator/OnConnect"), exports);
__exportStar(require("./decorator/OnDisconnect"), exports);
__exportStar(require("./decorator/OnMessage"), exports);
__exportStar(require("./decorator/EmitOnSuccess"), exports);
__exportStar(require("./decorator/EmitOnFail"), exports);
__exportStar(require("./decorator/SkipEmitOnEmptyResult"), exports);
__exportStar(require("./decorator/Middleware"), exports);
__exportStar(require("./decorator/MessageBody"), exports);
__exportStar(require("./decorator/NspParams"), exports);
__exportStar(require("./decorator/NspParam"), exports);
//# sourceMappingURL=index.js.map