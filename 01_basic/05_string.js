const name = "yash";
const age = 20;

// console.log("My name is " + name + " and I am " + age + " years old.");
// output: My name is yash and I am 20 years old.
// string concatenation

//console.log(`My name is ${name} and I am ${age} years old.`); 
// using backticks for template literals

// strings delcaration other types

const gameName = new String("yashpatel");

console.log(gameName[0]); // y
// accessing first character of string

//mathods on strings
console.log(gameName.length); // 9
// length of the string
console.log(gameName.toUpperCase()); // YASHPATEL
// converting to uppercase
console.log(gameName.toLowerCase()); // yashpatel
// converting to lowercase
console.log(gameName.indexOf("p")); // 3
// finding index of character 'p'
console.log(gameName.slice(0, 4)); // yash
// slicing the string from index 0 to 4
console.log(gameName.replace("yash", "Yash")); // Yashpatel
// replacing 'yash' with 'Yash'
console.log(gameName.includes("patel")); // true
// checking if 'patel' is included in the string
console.log(gameName.startsWith("yash")); // true
// checking if the string starts with 'yash'

const newStringOne = "   yash    "
console.log(newStringOne.trim()); // "yash"
// trimming whitespace from both ends of the string

const url = "https://www.example.com/yash%20patel";
url.replace("%20", " ") // replacing '%20' with space in the URL