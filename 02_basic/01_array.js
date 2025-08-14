// array
const myArrr = [0,1,2,3,4,5]
const myArr = new Array[1,2,3,4]
// console.log(myArr[1]);

// +++++++++ array methods ++++++++
myArr.push(6)
console.log(myArr);
// adding an element to the end of the array
myArr.pop()
console.log(myArr);
// removing the last element from the array
myArr.unshift(0)
console.log(myArr);
// adding an element to the beginning of the array
myArr.shift()
console.log(myArr);
// removing the first element from the array
console.log(myArr.indexOf(2));
// finding the index of an element in the array
console.log(myArr.includes(3));
// checking if an element is present in the array

// slice and splice
console.log("A ",myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1)
console.log("B ",myArr);
// output: [1, 2, 3, 4]
// slicing the array from index 1 to 3
// slice does not modify the original array

const myn2 = myArr.splice(1, 2);
console.log(myn2);
// output: [2, 3]
// removing 2 elements from index 1
// splice modifies the original array




