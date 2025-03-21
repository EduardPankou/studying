//типизация функции с 2 параметрами
function getFullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName
}

function calculateArea(width: number, height: number): number {
  return width * height
}

//Перегрузка функций (Function Overloads)
type messageType = 'info' | 'warning' | 'error'
function logMessage(message: string, level: messageType = 'info'): void {
  console.log(`[${level.toUpperCase()}]: ${message}`);
}

console.log('getFullName', getFullName('Eduard', 'Pankou'))
console.log('calculateArea', calculateArea(12, 23))
logMessage('Hi, how is it going?', 'error')