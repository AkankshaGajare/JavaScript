
/// passing object in function

const user = {
   name : "Akanksha",
   roll: "A32",
   dept : "cse"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and roll is ${anyobject.roll} and depatment is ${anyobject.dept}`);

    
}

handleObject(user)

////

function handleObject1(anyobject){
    console.log(`Username is ${anyobject.name} and roll is ${anyobject.roll} and depatment is ${anyobject.dept}`);

    
}

handleObject1({name : "Akanksha",
   roll: "A32",
   dept : "cse"})