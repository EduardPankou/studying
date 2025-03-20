interface Human {
  name: string
  age: number
  isEmployed: boolean,
  phoneNumber?: string | undefined
}
const user1: Human = {
  name: 'Eduard',
  age: 26,
  isEmployed: true,
}
const user2: Human = {
  name: 'Eduard',
  age: 26,
  isEmployed: true,
  phoneNumber: '+48883218000',
}

interface Operation {
  (a: number, b: number): number
}
const add: Operation = (a, b) => a + b;

type Status = string | number | boolean;
const statusType: Status = false;

interface Company {
  companyName: string
}

type Employee = Human & Company;
const employee: Employee = {
  name: 'Eduard',
  age: 26,
  isEmployed: true,
  companyName: 'Google',
}

type Color = 'red' | 'blue' | 'green'
const color: Color = 'red'

type PersonArray = [string, number];
const personArray: PersonArray = ['Eduard', 26]

interface EmployeeDetails extends Human {
  position: string
}
const employeeDetails: EmployeeDetails = {
  name: 'Eduard',
  age: 26,
  isEmployed: true,
  position: 'Senior Frontend Developer',
}