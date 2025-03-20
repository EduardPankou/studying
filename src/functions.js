function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
function calculateArea(width, height) {
    return width * height;
}
function logMessage(message, level) {
    if (level === void 0) { level = 'info'; }
    console.log("[".concat(level.toUpperCase(), "]: ").concat(message));
}
console.log('getFullName', getFullName('Eduard', 'Pankou'));
console.log('calculateArea', calculateArea(12, 23));
logMessage('Hi, how is it going?', 'error');
