fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let result = users.every(u => u.address.city === "South Christy")
    console.log("Exercise 5:", result) // false
  })
  .catch(error => console.error("Error fetching users:", error))
