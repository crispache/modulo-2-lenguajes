var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("************** DELIVERABLE 03 *********************");
console.log("");
console.log("************** Example function clone *********************");
//* Nota: copia sencilla(a primer nivel) no es una copia profunda.
var clone = function (source) {
    return __assign({}, source);
};
var merge = function (source, target) {
    var copy_target = clone(target);
    var copy_source = clone(source);
    return __assign(__assign({}, copy_target), copy_source);
};
var user_1 = { name: 'Manuel', age: 30 };
var user_2 = { name: "Maria", surname: "Ibañez", country: "SPA" };
var user_3 = { name: "Luisa", age: 31, married: true };
var objectCopy = clone(user_1);
console.log('clone -> ', objectCopy);
/*-----------------------------------------------------------------*/
var mergeArrays = merge(user_2, user_3);
console.log('Merge -> ', mergeArrays);
