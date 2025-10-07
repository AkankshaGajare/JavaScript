const cartoon = ["Doremon","Tom","unicorn","Oogy"]

console.log(cartoon)

const heros = ["thor","Ironman","spiderman","flash"]
console.log(heros)

heros.push(cartoon)
console.log(heros)

heros.concat(cartoon)
console.log(cartoon)

const heros1 = [...cartoon, ...heros]   // merge both arrays; spreads each element of cartoon & heros into a single new array

console.log("output",heros1)

 const newarr = [1,2,3,4,[5,6],8,7,[9,6,2,[12,77,85]]]
 const newarr1 = newarr.flat(Infinity)
 console.log(newarr1) 


console.log(Array.isArray("Akanksha"))
console.log(Array.from("Akanksha"))