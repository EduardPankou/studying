// Если библиотека импортируется как import something from 'lib',
// то создаём файл lib.d.ts в папке @types внутри src или types:
declare module 'lib' {
  export function someFunction(arg: string): number;
  export const someValue: boolean;
}
// Добавь в tsconfig.json:
// {
//   "compilerOptions": {
//   "typeRoots": ["./types", "./node_modules/@types"]
// }
// }

// Если библиотека импортируется через require, можно так:
// declare module 'lib' {
//   const value: any;
//   export = value;
// }