interface Chargeable {
  batteryLevel: number;

  chargeBattery(amount: number): void
}

abstract class Vehicle {
  brand: string;

  constructor(brand: string) {
    this.brand = brand
  }

  abstract info(): void

  startEngine(): void {
    console.log(`${this.brand}'s engine started!`)
  }
}

class Car extends Vehicle {
  info(): void {
    console.log(`Brand: ${this.brand}`)
  }
}
class ElectricCar extends Car implements Chargeable {
  batteryLevel: number;

  constructor(brand: string) {
    super(brand);
    this.batteryLevel = 0
  }

  info(): void {
    super.info();
    console.log('Is electric!')
  }

  chargeBattery(amount: number): void {
    let intervalId = null
    let restAmount = amount

    intervalId = setInterval(() => {
      if (restAmount === 0 || this.batteryLevel === 100) {
        console.log('Charging battery is finished!')
        clearInterval(intervalId)
        return
      }

      this.batteryLevel++
      restAmount--
      console.log(`Battery level: ${this.batteryLevel}%`)
    }, 500)
  }
}

const car: Car = new Car('Honda')
const electricCar: ElectricCar = new ElectricCar('Tesla')

car.info()
car.startEngine()
electricCar.info()
electricCar.startEngine()
electricCar.chargeBattery(15)
