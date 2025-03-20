interface Id {
  id: number
}
function gotFirstElement<T extends Id>(array: T[]): T {
  return array[0]
}
console.log(gotFirstElement([{id:2}, {id:1}]))

function merge<T, U>(obj1: T, obj2: U): T & U {
  return {...obj1, ...obj2}
}
console.log(merge({name: 'Eduard'}, {age: 26}))

function createPair<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2]
}
console.log(createPair('Person', {name: 'Eduard', age: 26}))

type Name = string
interface Item {
  name: Name
}
function findByName<T extends Item>(collection: T[], search: Name): T | undefined {
  return collection.find((item: T) => item.name.toLowerCase() === search.toLowerCase())
}
const myNewUser = findByName([{name: 'Eduard'}], 'eduard')
console.log('myNewUser', myNewUser)