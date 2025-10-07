/*
const regularUser = {
    email: "shiv@gmail.com",
    fullname:{
        username:{
            firstname:"Akanksha",
            lastname:"Gajare"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.username);
console.log(regularUser.fullname.username.firstname);
*/

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5: "a",6: "b"}

/*const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3)
*/
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);
