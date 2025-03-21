var Singleton = /** @class */ (function () {
    function Singleton() {
        this.value = Math.random();
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.getValue = function () {
        return this.value;
    };
    return Singleton;
}());
// Проверка:
var singletonA = Singleton.getInstance();
var singletonB = Singleton.getInstance();
console.log(singletonA.getValue()); // например, 0.1234
console.log(singletonB.getValue()); // такой же
console.log(singletonA === singletonB); // true
var LoggerSingleton = /** @class */ (function () {
    function LoggerSingleton() {
    }
    LoggerSingleton.getInstance = function () {
        if (!LoggerSingleton.instance) {
            LoggerSingleton.instance = new LoggerSingleton();
        }
        return LoggerSingleton.instance;
    };
    LoggerSingleton.prototype.log = function (message) {
        var now = new Date().toLocaleTimeString();
        console.log("".concat(now, " - ").concat(message));
    };
    return LoggerSingleton;
}());
var loggerSingleton1 = LoggerSingleton.getInstance();
var loggerSingleton2 = LoggerSingleton.getInstance();
loggerSingleton1.log('Hi');
setTimeout(function () { loggerSingleton2.log('Hello'); }, 1000);
