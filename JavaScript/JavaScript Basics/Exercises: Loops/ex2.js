
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] })
}

for (let person of people) {
  console.log(person.name + " is " + person.age + " years old")
}
