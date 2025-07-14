const args = process.argv.slice(2) // מסיר את הנתיב לקובץ וה-node
const num1 = Number(args[0])
const operator = args[1]
const num2 = Number(args[2])

let result

switch (operator) {
  case '+':
    result = num1 + num2
    break
  case '-':
    result = num1 - num2
    break
  case '*':
    result = num1 * num2
    break
  case '/':
    result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'
    break
  default:
    result = 'Invalid operator'
}

console.log(`${num1} ${operator} ${num2} = ${result}`)
