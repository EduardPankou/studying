//массив
let favouritesTechnologies: Array<string> = ['Vue js', 'Node.js']
//кортеж
let bookInfo: [string, number] = ['Samurai without a sword', 230]
//интерфейс
interface CarTypes {
  brand: string,
  year: number,
  isElectricType: boolean
}

let tesla: CarTypes = {
  brand: 'Tesla',
  year: 2022,
  isElectricType: true,
}

console.group('Car')
console.log('favouritesTechnologies', favouritesTechnologies)
console.log('bookInfo', bookInfo)
console.table(tesla)
console.groupEnd()