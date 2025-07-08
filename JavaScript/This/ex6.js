fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let result = users.find(u => u.address.suite === "Apt. 950")
    console.log("Exercise 6:", result.company.name)
  })
  .catch(error => console.error("Error fetching users:", error))
