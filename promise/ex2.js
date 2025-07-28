function processFile(filename, processingTime) {
    return new Promise((resolve, reject) => {
      console.log(`Starting to process ${filename}...`)
  
      setTimeout(() => {
        if (Math.random() < 0.15) {
          reject(new Error(`Failed to process ${filename}`))
        } else {
          const result = {
            filename: filename,
            size: Math.floor(Math.random() * 1000) + 100,
            processedAt: new Date().toLocaleTimeString()
          }
          console.log(`Completed ${filename}`)
          resolve(result)
        }
      }, processingTime)
    })
  }
  
  const files = [
    { name: "document1.pdf", time: 2000 },
    { name: "image1.jpg", time: 1500 },
    { name: "data.csv", time: 3000 },
    { name: "report.docx", time: 1000 }
  ]
  
  const startTime = Date.now()
  
  const filePromises = files.map(f => processFile(f.name, f.time))
  
  Promise.all(filePromises)
    .then(results => {
      const totalTime = (Date.now() - startTime) / 1000
      console.log(`All files processed in ${totalTime.toFixed(2)}s`)
      console.log(results)
    })
    .catch(err => {
      console.log("Some file failed:", err.message)
    })
  