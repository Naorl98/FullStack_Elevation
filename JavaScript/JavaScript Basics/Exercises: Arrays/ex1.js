const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.splice(1, 2)

// שינוי האיבר הרביעי ל־1 אחרי המחיקה, זה באינדקס 2
numbers[2] = 1

// מחיקת ארבעת האיברים האחרונים
numbers.splice(numbers.length - 4, 4)

numbers.unshift(0)

console.log(numbers) // [0, 1, 4, 5, 1]
