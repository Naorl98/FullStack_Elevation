const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1)
}

const getAge = function(age){
  if(age < 21){
    return "an Underage"
  }
  if(age > 55){
    return "a 55+"
  }
  return age + " year old"
}

const capitalizeProfession = function(profession){
  const words = profession.split(" ")
  let result = ""
  for(let word of words){
    result += capitalize(word) + " "
  }
  return result.trim()
}

const capitalizeCatchphrase = function(name, phrase){
  return capitalize(name) + ' loves to say "' + capitalize(phrase) + '"'
}

const getLocation = function(city, country){
  return capitalize(city) + ", " + capitalize(country)
}

const getSummary = function(person){
  let summary = ""

  summary += capitalize(person.name)
  summary += " is " + getAge(person.age) + " "
  summary += capitalizeProfession(person.profession) + " from "
  summary += getLocation(person.city, person.country) + ". "
  summary += capitalizeCatchphrase(person.name, person.catchphrase) + "."

  return summary
}

for(let i = 0; i < people_info.length; i++){
  console.log(getSummary(people_info[i]))
}

