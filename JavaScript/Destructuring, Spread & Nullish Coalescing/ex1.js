let meatArr = ["beef", "chicken"]
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"]

let [rabbit, ...pureVeggies] = vegetableArr

meatArr = [...meatArr, rabbit]
vegetableArr = [...pureVeggies]

console.log("Meat:", meatArr)        // ["beef", "chicken", "rabbit"]
console.log("Vegetables:", vegetableArr)  // ["carrots", "potatoes", "lettuce"]
