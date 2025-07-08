let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]

let gradeCounts = studentScores.reduce((counts, score) => {
  let grade = score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' : 'F'

  counts[grade] = counts[grade] + 1
  return counts
}, { A: 0, B: 0, C: 0, F: 0})

console.log("Exercise 9 - Grade Counts:", gradeCounts) 
