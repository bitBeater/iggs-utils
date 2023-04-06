"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.of = void 0;
function of(data) {
    return Promise.resolve(data);
}
exports.of = of;
function delay(ms) {
    return new Promise((resolve, _reject) => {
        setTimeout(resolve, ms);
    });
}
exports.delay = delay;
//# sourceMappingURL=promises.js.map