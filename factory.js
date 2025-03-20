var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log('Drawing a Circle');
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log('Drawing a Square');
    };
    return Square;
}());
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.createShape = function (type) {
        var shapeCreator = this.types[type];
        if (!shapeCreator) {
            throw new Error('Unknown type');
        }
        return shapeCreator();
    };
    ShapeFactory.types = {
        circle: function () { return new Circle(); },
        square: function () { return new Square(); }
    };
    return ShapeFactory;
}());
var circle = ShapeFactory.createShape('circle');
var square = ShapeFactory.createShape('square');
circle.draw();
square.draw();
