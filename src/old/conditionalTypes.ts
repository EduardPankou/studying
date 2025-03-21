type isNumber<T> = T extends number ? number : string

type Person = {
  name: string;
  age: number;
};

type PartialPerson = Partial<Person>;

const person0: PartialPerson = {}
const person1: PartialPerson = {age: 26}
const person2: PartialPerson = {name: 'Eduard', age: 26}

type UserRole = Record<string, string>;

const userRoles: UserRole = {
  admin: 'admin',
  user: 'user',
  guest: 'guest',
}