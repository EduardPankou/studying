function combine(firstValue, secondValue) {
    return String(firstValue) + String(secondValue);
}
console.log('combine', combine(1, 2));
console.log('combine', combine('Eduard', 'Pankou'));
var students = [
    {
        name: 'Eduard',
        isHeadman: true,
        year: 3,
        specialization: 'PMS'
    }
];
console.log('students', students);
function move(direction) {
    if (direction === 'up') {
        return 'You are moving up';
    }
    return 'You are moving in another direction';
}
console.log('move', move('left'));
console.log('move', move('up'));
