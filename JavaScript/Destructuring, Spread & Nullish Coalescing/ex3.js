let employeesArr = [
    { name : "Joey" , id: 1 , age: 26},
    { name : "Lily" , id: null , age: 24},
    { name : "Alice" , id: 7 , age: null},
    { name : "Sam" , id: 8 , age: 24},
    { name : "Ray" , id: null , age: null}
  ]
  
  for (let emp of employeesArr) {
    let id = emp.id ?? null
    let age = emp.age ?? null
  
    if (id === null || age === null) {
      console.log(`${emp.name} has missing data`)
    }
  }
  