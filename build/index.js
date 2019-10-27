"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function p1(a) {
    //[1,2,10] => ['(1) (2) (10)']
    if (a) {
        return a.map((x) => `(${x})`).join(' ');
    }
    return '';
}
exports.p1 = p1;
