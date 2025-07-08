let cartItems = [
  { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
  { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
  { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
  { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
  { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
]

let taxRates = {
  clothing: 0.08,
  electronics: 0.10,
  food: 0.05
}

let finalTotal = cartItems.reduce((total, item) => {
  let taxRate = taxRates[item.category]
  let itemTotal = item.price * item.quantity * (1 + taxRate)
  return total + itemTotal
}, 0)

console.log("Exercise 10 - Final Cost with Tax:", finalTotal)
