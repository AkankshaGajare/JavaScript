// Creating an empty object using Object constructor
// const tinderUser = new Object()   
const tinderUser = {}   // empty object using literal

// Adding properties to object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);   // check object

// Nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);   // accessing nested property

// Object merging
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Different ways to merge objects
// const obj3 = { obj1, obj2 }  // nested objects inside obj3
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // merge into new object

const obj3 = {...obj1, ...obj2}   // spread operator for merging
// console.log(obj3);

// Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users[1].email   // accessing 2nd object’s email
// console.log(tinderUser);

// Object methods
// console.log(Object.keys(tinderUser));    // get keys
// console.log(Object.values(tinderUser));  // get values
// console.log(Object.entries(tinderUser)); // get key-value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if property exists


// Object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Extract courseInstructor and rename to instructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor); // ❌ undefined (we renamed it)
// Correct way:
console.log(instructor); // prints "hitesh"


// Example of JSON object (similar to API data)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Example of array of objects
[
    {},
    {},
    {}
]
