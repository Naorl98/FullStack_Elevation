const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  const user = {}
  
  readline.question('Enter your name: ', name => {
    user.name = name
    readline.question('Enter your email: ', email => {
      user.email = email
      readline.question('Enter your age: ', age => {
        user.age = age
        readline.question('Enter your favorite color: ', color => {
          user.color = color
          console.log('\nRegistration Summary:')
          console.log(`Name: ${user.name}`)
          console.log(`Email: ${user.email}`)
          console.log(`Age: ${user.age}`)
          console.log(`Favorite Color: ${user.color}`)
          readline.close()
        })
      })
    })
  })
  