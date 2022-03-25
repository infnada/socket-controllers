"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMetadata = void 0;
const ResultTypes_1 = require("./types/ResultTypes");
class ActionMetadata {
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    constructor(controllerMetadata, args) {
        this.controllerMetadata = controllerMetadata;
        this.name = args.name;
        this.target = args.target;
        this.method = args.method;
        this.type = args.type;
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    executeAction(params) {
        // TODO: remove fix this eslint warning
        // eslint-disable-next-line prefer-spread
        return this.controllerMetadata.instance[this.method].apply(this.controllerMetadata.instance, params);
    }
    // -------------------------------------------------------------------------
    // Accessors
    // -------------------------------------------------------------------------
    get emitOnSuccess() {
        return this.results.find(resultHandler => resultHandler.type === ResultTypes_1.ResultTypes.EMIT_ON_SUCCESS);
    }
    get emitOnFail() {
        return this.results.find(resultHandler => resultHandler.type === ResultTypes_1.ResultTypes.EMIT_ON_FAIL);
    }
    get skipEmitOnEmptyResult() {
        return this.results.find(resultHandler => resultHandler.type === ResultTypes_1.ResultTypes.SKIP_EMIT_ON_EMPTY_RESULT);
    }
}
exports.ActionMetadata = ActionMetadata;
//# sourceMappingURL=ActionMetadata.js.map