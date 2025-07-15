
const Exercises = require('./code')
const ex = new Exercises()

// תרגיל 1: isEven
test("isEven should return true for even number", () => {
  expect(ex.isEven(4)).toBeTruthy()
})

test("isEven should return false for odd number", () => {
  expect(ex.isEven(5)).toBeFalsy()
})

test("isEven should return false for undefined", () => {
  expect(ex.isEven(undefined)).toBeFalsy()
})


// תרגיל 2: removeAtLeastOne
test("removeAtLeastOne should remove at least one element", () => {
  const arr = [1, 2, 3, 4]
  const len = arr.length
  const result = ex.removeAtLeastOne(arr)
  expect(result.length).toBeLessThan(len)
})

test("removeAtLeastOne should handle array of one element", () => {
  const result = ex.removeAtLeastOne([1])
  expect(result.length).toBe(0)
})

test("removeAtLeastOne should handle non-array input", () => {
  const result = ex.removeAtLeastOne("not-an-array")
  expect(result).toEqual({ error: "Input must be an array" })
})


// תרגיל 3: simplify
test("simplify should remove all forbidden symbols", () => {
  const input = "He!l#lo. Wo,r'ld!"
  const output = ex.simplify(input)
  expect(output).toBe("Hello World")
})

test("simplify should return empty string if input is not string", () => {
  const output = ex.simplify(12345)
  expect(output).toBe("")
})


// תרגיל 4: validate (TDD)
test("validate should return error if no booleans present", () => {
  const result = ex.validate(["not", 123])
  expect(result).toEqual({ error: "Need at least one boolean" })
})

test("validate should return true if more true than false", () => {
  const result = ex.validate([true, true, false])
  expect(result).toBe(true)
})

test("validate should return false if more false than true", () => {
  const result = ex.validate([false, false, true])
  expect(result).toBe(false)
})

test("validate should return error if input is not array", () => {
  const result = ex.validate("not-array")
  expect(result).toEqual({ error: "Input must be an array" })
})


