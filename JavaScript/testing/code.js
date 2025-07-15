
class Exercises {
    // תרגיל 1
    isEven(n) {
      return n % 2 === 0;
    }
  
    // תרגיל 2
    removeAtLeastOne(arr) {
      if (!Array.isArray(arr)) return { error: "Input must be an array" };
      if (arr.length < 2) return [];
      const numToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
      arr.splice(0, numToRemove);
      return arr;
    }
  
    // תרגיל 3
    simplify(str) {
      const symbols = ["!", "#", ".", ",", "'"];
      if (typeof str !== "string") return "";
      return str.split("").filter(c => !symbols.includes(c)).join("");
    }
  
    // תרגיל 4 (TDD)
    validate(arr) {
      if (!Array.isArray(arr)) return { error: "Input must be an array" };
      const bools = arr.filter(v => typeof v === "boolean");
  
      if (bools.length === 0) {
        return { error: "Need at least one boolean" };
      }
  
      const trues = bools.filter(b => b === true).length;
      const falses = bools.length - trues;
  
      return trues > falses;
    }
}  

module.exports = Exercises;
