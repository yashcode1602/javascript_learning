let score ="33abs"; 
//console.log(typeof score); 
//console.log(typeof(score)); 

let valueInNumber = Number(score); // convert string to number
//console.log( typeof valueInNumber); // 33
//console.log(valueInNumber); // naN (Not a Number, because "abs" cannot be converted to a number)


// "33" => 33
//"33abc" => NaN (Not a Number, because "abc" cannot be converted to a number)
// true => 1 ; false => 0

let isLoggedIn = 1;
 let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean

 // converstion rules:

 // 1 => true; 0 => false
 // ""=> false; 
 // "hello" => true
 
// how to convert number to string;
 
let someNumber = 123;
let numberToString = String(someNumber); // convert number to string
// console.log(typeof numberToString); // string
// console.log(numberToString); // "123"


// *************Operations***************
let str1 = "Hello";
let str2 = "World"; 

let str3 = str1 + str2; // string concatenation
// console.log(str3); // "HelloWorld"

// console.log("1" + 2); // "12" (string concatenation)
// console.log(1 + "2" + 1); // "121" (string concatenation)
// console.log(1 + 2 + "1"); // "31" (number addition first, then string concatenation)
 
let gameCounter = 100;
gameCounter++; // increment the game counter by 1
// console.log(gameCounter); // 101

// *******pre-increment and post-increment*******
let preIncrement = ++gameCounter; // pre-increment
// console.log(preIncrement); // 102
// console.log(gameCounter); // 102
let postIncrement = gameCounter++; // post-increment
// console.log(postIncrement); // 102
// console.log(gameCounter); // 103 (gameCounter is incremented after the value is assigned to postIncrement)

