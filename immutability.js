let test = 5;
let test2 = test;
test = 6;
console.log(test);
console.log(test2);

const arr = [1, 2, 3];
const arr2 = arr;
console.log(arr);
console.log(arr2);
arr2[1] = 5;
console.log(arr);
console.log(arr2);