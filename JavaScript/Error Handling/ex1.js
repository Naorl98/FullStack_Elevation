function safeJsonParse(jsonString) {
    try {
      return JSON.parse(jsonString)
    } catch (error) {
      return "Invalid JSON format"
    }
  }
  
  console.log(safeJsonParse('{"name": "John"}')) 
  console.log(safeJsonParse('invalid json'))    
  