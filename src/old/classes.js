var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, year, isElectric) {
        this.brand = brand;
        this.year = year;
        this.isElectric = isElectric;
    }
    Car.prototype.getIsElectric = function () {
        return this.isElectric;
    };
    return Car;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(year, autopilot) {
        var _this = _super.call(this, 'Tesla', year, autopilot) || this;
        _this.autopilot = autopilot;
        return _this;
    }
    return Tesla;
}(Car));
var myCar = new Tesla(2022, true);
console.log('brand', myCar.brand);
console.log('year', myCar.year);
console.log('autopilot', myCar.autopilot);
console.log('isElectric', myCar.getIsElectric());
