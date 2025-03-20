var user1 = {
    name: 'Eduard',
    age: 26,
    isEmployed: true,
};
var user2 = {
    name: 'Eduard',
    age: 26,
    isEmployed: true,
    phoneNumber: '+48883218000',
};
var add = function (a, b) { return a + b; };
var statusType = false;
var employee = {
    name: 'Eduard',
    age: 26,
    isEmployed: true,
    companyName: 'Google',
};
var color = 'red';
var personArray = ['Eduard', 26];
var employeeDetails = {
    name: 'Eduard',
    age: 26,
    isEmployed: true,
    position: 'Senior Frontend Developer',
};
function cutIt(value) {
    if (typeof value === 'number') {
        return value / 2;
    }
    return value.slice(0, Math.round(value.length / 2));
}
console.log(cutIt(5));
console.log(cutIt('Eduardos'));
