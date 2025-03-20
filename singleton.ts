class Singleton {
  private static instance: Singleton;
  private value: number;

  private constructor() {
    this.value = Math.random();
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getValue(): number {
    return this.value;
  }
}
// Проверка:
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();

console.log(singletonA.getValue()); // например, 0.1234
console.log(singletonB.getValue()); // такой же
console.log(singletonA === singletonB); // true

class LoggerSingleton {
  private static instance: LoggerSingleton;

  private constructor() {
  }

  public static getInstance(): LoggerSingleton {
    if (!LoggerSingleton.instance) {
      LoggerSingleton.instance = new LoggerSingleton();
    }
    return LoggerSingleton.instance;
  }

  public log(message: string): void {
    const now = new Date().toLocaleTimeString();
    console.log(`${now} - ${message}`)
  }
}

const loggerSingleton1 = LoggerSingleton.getInstance()
const loggerSingleton2 = LoggerSingleton.getInstance()
loggerSingleton1.log('Hi')
loggerSingleton2.log('Hello')