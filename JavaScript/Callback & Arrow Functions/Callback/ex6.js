const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
  
  const commentOnWeather = temp => "It's " + determineWeather(temp)
  
  console.log(commentOnWeather(30)) // "It's hot"
  console.log(commentOnWeather(22)) // "It's cold"
  