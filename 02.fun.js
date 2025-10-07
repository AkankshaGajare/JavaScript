/*
function calculateCartPrice1(num1){
    return num1
}

console.log(calculateCartPrice1(2000,5478,6932))

//********************************* 
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2000,5478,6932))

//*/
function calculateCartPrice2(val1,val2,...num1)
{
    return num1
}

console.log(calculateCartPrice2(500,3000,4000,6000,7000));

//
function calculateCartPrice3(val1,val2,...num1)
{
    return [val1, val2, num1];
}

console.log(calculateCartPrice3(500,3000,4000,6000,7000));
