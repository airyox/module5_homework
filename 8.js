let myMap = new Map();
myMap.set('key', 'prop');
myMap.set(1, 'prop2');
myMap.set(true, 123);

Function printMyMap() {
myMap.fortach((value,key) => {
console.log('X – ${key}, Y – ${value}');
})
}
printMyMap();
