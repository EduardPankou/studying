function wrap(value) {
    return { value: value };
}
console.log(wrap(123));
console.log(wrap('dsa'));
console.log(wrap({ a: 1 }));
var Pair = /** @class */ (function () {
    function Pair(firstValue, secondValue) {
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }
    return Pair;
}());
var firstPair = new Pair('Eduard', 'Pankou');
var secondPair = new Pair('Eduard', { score: 12 });
console.log('firstPair1', firstPair.firstValue);
console.log('firstPair2', firstPair.secondValue);
console.log('secondPair1', secondPair.firstValue);
console.log('secondPair2', secondPair.secondValue);
function getFirstElement(array) {
    return array[0];
}
console.log('getFirstElement', getFirstElement([1, 2, 3, 's']));
console.log('getFirstElement', getFirstElement([{ a: 1 }]));
