interface wrapType<T> {
  value: T
}

function wrap<T>(value: T): wrapType<T> {
  return {value}
}

console.log(wrap(123))
console.log(wrap('dsa'))
console.log(wrap({a: 1}))

class Pair<T, U> {
  firstValue: T
  secondValue: U

  constructor(firstValue: T, secondValue: U) {
    this.firstValue = firstValue
    this.secondValue = secondValue
  }
}

const firstPair = new Pair('Eduard', 'Pankou')
const secondPair = new Pair('Eduard', {score: 12})

console.log('firstPair1', firstPair.firstValue)
console.log('firstPair2', firstPair.secondValue)
console.log('secondPair1', secondPair.firstValue)
console.log('secondPair2', secondPair.secondValue)

function getFirstElement<T>(array: [T, ...T[]]): T {
  return array[0]
}

console.log('getFirstElement', getFirstElement([1, 2, 3,'s']))
console.log('getFirstElement', getFirstElement([{a: 1}]))