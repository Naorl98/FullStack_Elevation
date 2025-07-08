fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let result = users.filter(u => u.address.zipcode.startsWith("5"))
    console.log("Exercise 2:", result)
  })
  .catch(error => console.error("Error fetching users:", error))
