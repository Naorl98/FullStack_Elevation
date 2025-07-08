fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let result = users
      .filter(u => u.address.zipcode.startsWith("5"))
      .map(u => u.id)
    console.log("Exercise 3:", result)
  })
  .catch(error => console.error("Error fetching users:", error))
