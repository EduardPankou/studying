//Простые типы
let userName: string = "Katy"
let userAge: number = 25
let isEmployed: boolean = false
let car: null = null
let apartment: undefined = undefined

console.group('Katy')
console.log('name', userName)
console.log('age', userAge)
console.log('isDeveloper', isEmployed)
console.log('skills', car)
console.log('anything', apartment)
console.groupEnd()