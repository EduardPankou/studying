type FunctionArgs<T> = T extends (...args: infer A) => any ? A : never;
type Test1 = FunctionArgs<(x: number, y: string) => void>; // [number, string]
type Test2 = FunctionArgs<string>; // never

type FirstElement<T> = T extends [infer First, ...any[]] ? First : never;
type Test3 = FirstElement<[1, 2, 3]>; // 1
type Test4 = FirstElement<["a", "b", "c"]>; // "a"
type Test5 = FirstElement<number>; // never

type FirstArg<T> = T extends (arg: infer A, ...args: any[]) => any ? A : never;
type Test6 = FirstArg<(x: number, y: string) => void>; // number
type Test7 = FirstArg<() => void>; // never
type Test8 = FirstArg<string>; // never

interface Test9 {
  id: number
  name: string
  isMan: boolean
}
type MappedTest9<T> = {
  [K in keyof T]: string;
}
type Test9String = MappedTest9<Test9>

interface Test10 {
  id: number
  name: string
  isMan: boolean
}
type ReadonlyAndOptional<T> = {
  readonly [K in keyof T]?: T[K];
}
type ReadonlyAndOptionalTest10 = ReadonlyAndOptional<Test10>
const Test10Object: ReadonlyAndOptionalTest10 = {
  id: 1
}

type NonOptional<T> = {
  [K in keyof T]-?: T[K];
}
type NonOptionalTest10 = NonOptional<ReadonlyAndOptionalTest10>
const Test10Object2: NonOptionalTest10 = {
  id:1,
  isMan: true,
  name: 'Test 1',
}