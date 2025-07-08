const checkExists = function(array, number){
  for(let i = 0; i < array.length; i++){
    if(array[i] === number){
      return true
    }
  }
  return false
}

console.log(checkExists([1, 2, 3], 2)) 
console.log(checkExists([1, 2, 3], 5)) 
