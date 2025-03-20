//Создание класса, Модификаторы доступа
class Car {
  brand: string
  year: number
  private isElectric: boolean

  constructor(brand: string, year: number, isElectric: boolean) {
    this.brand = brand
    this.year = year
    this.isElectric = isElectric
  }

  getIsElectric(): boolean {
    return this.isElectric
  }
}

//Наследование
class Tesla extends Car {
  autopilot: boolean

  constructor(year: number, autopilot: boolean) {
    super('Tesla', year, true);
    this.autopilot = autopilot;
  }
}

const myCar = new Tesla(2022, true)
console.log('brand', myCar.brand)
console.log('year', myCar.year)
console.log('autopilot', myCar.autopilot)
console.log('isElectric', myCar.getIsElectric())