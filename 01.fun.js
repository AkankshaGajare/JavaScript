//1
function addTwoNumbers(number1,number2){
    return number1 + number2
}
const result = addTwoNumbers(8,9)
console.log("Result:", result);


//2
function name(Username){
    return Username
}
const Username = name("Akanksha")
console.log("Name:",Username);


//3

function loginUserMessage(username1){
    return `${username1} just loggged in!`  //backtick =>`....`
}
console.log(loginUserMessage("Akanksha"));

//4
function myFunction(msg){
 console.log(msg);
 
}
myFunction()

//5
function myFunction1(msg,n){
 console.log(msg * n);
 
}
myFunction1("i love js",1100)