fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let result = users
      .map(u => u.name)
      .filter(name => name.startsWith("C"))
    console.log("Exercise 4:", result)
  })
  .catch(error => console.error("Error fetching users:", error))
