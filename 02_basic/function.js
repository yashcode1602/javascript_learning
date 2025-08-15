function addTwoNumbers(a, b) { //parameters
  console.log(a + b);
}

addTwoNumbers(5, 10); //arguments

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `Welcome ${username}`;
}
console.log(loginUserMessage("John"));
//console.log(loginUserMessage()); //undefined case

//how to pass multiple arguments
function calculaterCartPrice(...num1){ // this ... is spread operator
    return num1 
}
console.log(calculaterCartPrice(100, 200, 300, 400, 500)); // [100, 200, 300, 400, 500]

function handleObject(anyobject){
    console.log(`username: ${anyobject.username}, and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({username: "John", price: 100}); // passing object directly