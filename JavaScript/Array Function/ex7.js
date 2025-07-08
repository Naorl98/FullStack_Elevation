fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const describeUser = user => {
      console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
    }
    users.forEach(describeUser)
  })
  .catch(error => console.error("Error fetching users:", error))
