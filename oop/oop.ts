class Car {
  brand: string;
  private year: number;

  constructor(brand: string, year: number) {
    this.brand = brand
    this.year = year
  }

  info(): void {
    console.log(`Brand: ${this.brand}, Year: ${this.year}`)
  }

  getYear(): number {
    return this.year
  }
}
const car1: Car = new Car('Toyota', 2020);

class ElectricCar extends Car {
  batteryCapacity: number;

  constructor(brand: string, year: number, batteryCapacity: number) {
    super(brand, year);
    this.batteryCapacity = batteryCapacity
  }

  info(): void {
    super.info();
    console.log(`Battery: ${this.batteryCapacity} kWh`)
  }
}

const tesla: ElectricCar = new ElectricCar('Tesla', 2021, 100);

const garage: Car[] = [
  new Car('BMW', 2022),
  new Car('Honda', 1998),
  new ElectricCar('Tesla', 2021, 99),
  new ElectricCar('Nissan', 2018, 30)
]

garage.forEach((car: Car) => car.info())