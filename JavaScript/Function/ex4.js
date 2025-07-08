const calculator = {
  add: function(x, y){
    return x + y
  },
  subtract: function(x, y){
    return x - y
  }
}

const result1 = calculator.add(20, 1)      
const result2 = calculator.subtract(30, 9)  
console.log(calculator.add(result1, result2)) // 42
