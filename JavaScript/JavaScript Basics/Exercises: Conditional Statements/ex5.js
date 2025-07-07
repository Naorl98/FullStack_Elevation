let customerType = "premium"
let purchaseAmount = 150
let dayOfWeek = 6 // 0 = Sunday, 1 = Monday, etc.

let discount = 0

if (customerType === "vip") {
  discount = 0.2
} else if (customerType === "premium") {
  if (dayOfWeek === 5 || dayOfWeek === 6) {
    discount = 0.15
  } else {
    discount = 0.1
  }
} else if (customerType === "regular") {
  if (purchaseAmount > 100) {
    discount = 0.1
  } else if (purchaseAmount > 50) {
    discount = 0.05
  } else {
    discount = 0
  }
}

console.log("Discount applied: " + (discount * 100) + "%")
