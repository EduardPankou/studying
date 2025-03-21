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
function getDiscountPrice(product) {
    if ('discount' in product) {
        return product.price - product.discount;
    }
    return product.price;
}
console.log(getDiscountPrice({ price: 5 }));
console.log(getDiscountPrice({ price: 5, discount: 2 }));
function addedDefaultValuesToUser(user) {
    var defaults = {
        id: 0,
        name: "Eduard",
    };
    return __assign(__assign({}, defaults), user);
}
console.log(addedDefaultValuesToUser({}));
console.log(addedDefaultValuesToUser({ id: 1 }));
console.log(addedDefaultValuesToUser({ id: 1, name: 'asd' }));
