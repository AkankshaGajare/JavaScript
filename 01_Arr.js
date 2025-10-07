const arr = [1,2,3,4,5,6]
console.log(arr)

//Array Methods
arr.push(8)          // adds 8 at the END of the array
console.log(arr)    

arr.pop()            // removes the LAST element from the array
console.log(arr)    

arr.unshift(56)      // adds 56 at the BEGINNING of the array
console.log(arr)     

arr.shift()          // removes the FIRST element from the array
console.log(arr)

console.log(arr.includes(9))
console.log(arr.indexOf(3))

const newArr = arr.join()  // joins all elements of 'arr' into a single string, separated by commas (default)

console.log(arr)           // prints the original array → remains unchanged

console.log(newArr)        // prints the resulting string formed by joining array elements

//CONCEPT OF SLICE AND SPLICE

// slice() --> returns a new copied portion of array from index 2 to 4 (5 is not included), original array remains unchanged
console.log("After slice:", arr.slice(2,5))

// splice() --> removes 5 elements starting from index 1, modifies the original array, and returns removed elements
console.log("After Splice:", arr.splice(1,5))
