fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    let result = users.map(u => ({
      email: u.email,
      companyName: u.company.name
    }))
    console.log("Exercise 1:", result)
  })
  .catch(error => console.error("Error fetching users:", error))
9