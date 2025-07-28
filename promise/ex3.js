const inventory = {
    'laptop': { price: 999, stock: 5 },
    'mouse': { price: 25, stock: 10 },
    'keyboard': { price: 75, stock: 0 },
    'monitor': { price: 299, stock: 3 }
  }
  
  function checkInventory(items) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (let item of items) {
          if (!inventory[item] || inventory[item].stock <= 0) {
            return reject(new Error(`Out of stock: ${item}`))
          }
        }
        resolve(items)
      }, 500)
    })
  }
  
  function calculateTotal(items) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0)
        let tax = +(subtotal * 0.08).toFixed(2)
        let total = +(subtotal + tax).toFixed(2)
        resolve({ subtotal, tax, total })
      }, 200)
    })
  }
  
  function processPayment(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject(new Error("Payment failed"))
        } else {
          resolve({
            transactionId: Math.floor(Math.random() * 100000),
            amount,
            status: 'success'
          })
        }
      }, 1500)
    })
  }
  
  function updateInventory(items) {
    return new Promise((resolve) => {
      setTimeout(() => {
        items.forEach(item => inventory[item].stock--)
        resolve(inventory)
      }, 300)
    })
  }
  
  function checkout(itemNames) {
    return checkInventory(itemNames)
      .then(availableItems => calculateTotal(availableItems))
      .then(priceInfo => processPayment(priceInfo.total)
        .then(paymentInfo => updateInventory(itemNames)
          .then(() => ({
            message: "🛒 Order completed!",
            payment: paymentInfo,
            total: priceInfo
          }))
        )
      )
  }
  