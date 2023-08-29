var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 02 *********************");
var femaleSingers = ['Beyoncé', 'Aretha Franklin', 'Whitney Houston', 'Tina Turner'];
var maleSingers = ['Michael Jackson', 'Elvis Presley', 'Freddie Mercury'];
console.log("**** Array 1 ****", femaleSingers);
console.log("**** Array 2 ****", maleSingers);
console.log("");
console.log("************** Example function concat Arrays (a, b) *********************");
var concatBase = function (a, b) {
    return a && b ? __spreadArray(__spreadArray([], a, true), b, true) : a ? __spreadArray([], a, true) : b ? __spreadArray([], b, true) : [];
};
var bestSingers = concatBase(femaleSingers, maleSingers);
console.log('Concat (a, b) -> ', bestSingers);
console.log("");
console.log("************** Example function concat multiple Arrays (a, b, ...) *********************");
var concatMultipleArrays = function () {
    var someArrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        someArrays[_i] = arguments[_i];
    }
    var result = [];
    someArrays.forEach(function (simpleArray) {
        if (simpleArray) {
            result = __spreadArray(__spreadArray([], result, true), simpleArray, true);
        }
    });
    return result;
};
var multipleArrays = concatMultipleArrays(femaleSingers, maleSingers, ['Rihanna'], ['Lenny Kravitz'], undefined, null);
console.log('Concat Multiple -> ', multipleArrays);
