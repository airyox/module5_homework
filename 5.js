let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let counter = 0;

for (let elem of arr) {
if (elem == 'a') {
counter++;
}
}

console.log(counter);

for (let i = 0; i < arr.length; i++) {
alert( arr[i] );
}