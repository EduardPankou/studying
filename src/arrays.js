var favouritesTechnologies = ['Vue js', 'Node.js'];
var bookInfo = ['Samurai without a sword', 230];
var tesla = {
    brand: 'Tesla',
    year: 2022,
    isElectric: true,
};
console.group('Car');
console.log('favouritesTechnologies', favouritesTechnologies);
console.log('bookInfo', bookInfo);
console.table(tesla);
console.groupEnd();
