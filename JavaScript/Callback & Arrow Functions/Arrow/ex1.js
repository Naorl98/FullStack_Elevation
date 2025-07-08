const pushPull = function (func) {
    func()
  }
  
  const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  pushPull(push) 
  pushPull(pull)
  