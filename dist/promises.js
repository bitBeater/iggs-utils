"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = of;
exports.delay = delay;
function of(data) {
    return Promise.resolve(data);
}
function delay(ms) {
    return new Promise((resolve, _reject) => {
        setTimeout(resolve, ms);
    });
}
//# sourceMappingURL=promises.js.map