abstract class Vehicle {
  abstract startEngine(): string

  stopEngine () :string {
    return 'Engine stopped'
  }
}

class Van extends Vehicle {
  startEngine(): string {
    return 'Car engine started';
  }
}

class Motorcycle extends Vehicle {
  startEngine(): string {
    return 'Motorcycle engine started';
  }
}

const van = new Van()
const motorcycle = new Motorcycle()

console.log('van', van.startEngine())
console.log('van', van.stopEngine())
console.log('motorcycle', motorcycle.startEngine())
console.log('motorcycle', motorcycle.stopEngine())

function loggedMethod<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    console.log(`LOG: Entering method '${methodName}'.`)
    const result = target.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`)
    return result;
  }

  return replacementMethod;
}


class MyClass {
  constructor() {
    console.log("MyClass instance created");
  }

  @loggedMethod
  sum(num1: number, num2: number): number {
    return num1 + num2;
  }
}

const myClass = new MyClass()
myClass.sum(1,2)