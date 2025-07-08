const getTime = function (func) {
    const time = new Date()
    func(time)
  }
  
  const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  
  getTime(returnTime)
  