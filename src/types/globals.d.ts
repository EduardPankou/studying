//Иногда библиотека добавляет глобальные объекты (например, window.someLib). Тогда создаём globals.d.ts:
declare global {
  interface Window {
    someLib: {
      doSomething(): void;
    };
  }
}
