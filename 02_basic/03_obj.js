//++++++object++++++++
//singleton

//object literal

const mySm = Symbol('key1');

const myObject = {
    name: "yash",
    "full name" : "Yash Kumar",
    mySm:"key1",
    age: 25,
    location: "India",
    isloggedIn: true,
    email : "yash@gmail.com",
}
// console.log(myObject);
// //output the object
// console.log(myObject.name);
// //output the object with key
// console.log(myObject["full name"]);
// //output the object with symbol key
// console.log(myObject[mySm]);
// //output the object with key
// console.log(myObject.age);

// myObject.age = 26;
//update the object with key

//Object.freeze(myObject);
//freeze the object

myObject.greeting = function() {
    console.log("Hello");
}
console.log(myObject.greeting);
//output the object with function

myObject.greetingtwo = function() {
    console.log(`hello ${this.name}`);

}
console.log(myObject.greetingtwo());

//output the object with function using this keyword

//++++++singleton++++++++

//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "12345";
tinderUser.name = "Yash Kumar";
tinderUser.age = 25;

console.log(tinderUser);

const regularUser = {
    email: "yash@gmail.com",
    fullName: {
        firstName: "Yash",
        lastName: "Kumar"
    },


}
console.log(Object.keys(tinderUser));
// output the keys of the tinderUser object in an array 
console.log(regularUser);
// output the regular user object
console.log(regularUser.fullName.firstName);
// output the regular user object with nested object

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);
// output the merged object using Object.assign

const newcourse = {
    name: "JavaScript",
    price: 999,
    courseinstructor: "Yash Kumar",
}

const {courseinstructor: instructor} = newcourse;
console.log(instructor);
// output the course instructor using destructuring assignment
