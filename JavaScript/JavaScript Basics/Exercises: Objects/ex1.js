const p1 = {
  name: "Jill",
  age: 25,
  city: "New York"
}

const p2 = {
  name: "Robert",
  age: 25,
  city: "New York"
}

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log("Jill wanted to date Robert")
  } else {
    console.log("Jill wanted to date Robert, but couldn't")
  }
}
