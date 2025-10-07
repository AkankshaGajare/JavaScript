const mySym = Symbol("key1")

const JsUser = {
    name:"Akanksha",
    "full name" : "Akanksha Gajare",
    [mySym] : "mykey1",
    age : 18,
    location:"Aran",
    email : "asdfg@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["mon", "Sun"]
}

console.log(JsUser.name)
/*console.log(JsUser["location"])

//console.log(JsUser.full name)
console.log(JsUser["full name"])

console.log(mySym)
console.log(JsUser[mySym])


JsUser.email = "sbksb@gmail.com"
console.log(JsUser.email)
Object.freeze(JsUser)
JsUser.email = "gajare@gmail.com"
console.log(JsUser.email)*/


JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
