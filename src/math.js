"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.multiply = multiply;
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
function multiply() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc * num; }, 1);
}
