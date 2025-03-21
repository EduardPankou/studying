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
function gotFirstElement(array) {
    return array[0];
}
console.log(gotFirstElement([{ id: 2 }, { id: 1 }]));
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge({ name: 'Eduard' }, { age: 26 }));
function createPair(value1, value2) {
    return [value1, value2];
}
console.log(createPair('Person', { name: 'Eduard', age: 26 }));
function findByName(collection, search) {
    return collection.find(function (item) { return item.name.toLowerCase() === search.toLowerCase(); });
}
var myNewUser = findByName([{ name: 'Eduard' }], 'edurad');
console.log(myNewUser);
