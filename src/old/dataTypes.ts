type combineValue = number | string

function combine (firstValue: combineValue, secondValue: combineValue): string {
  return String(firstValue) + String(secondValue)
}

console.log('combine', combine(1, 2))
console.log('combine', combine('Eduard', 'Pankou'))

interface Student {
  name: string,
  isHeadman: boolean,
}

interface Course {
  year: number,
  specialization: string,
}

type EnrolledStudent = Student & Course

const students: Array<EnrolledStudent> = [
  {
    name: 'Eduard',
    isHeadman: true,
    year: 3,
    specialization: 'PMS'
  }
]

console.log('students', students)

type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction): string {
  if (direction === 'up') {
    return 'You are moving up'
  }
  return 'You are moving in another direction'
}

console.log('move', move('left'))
console.log('move', move('up'))