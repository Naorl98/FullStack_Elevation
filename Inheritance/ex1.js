class Person {
    constructor(name, startYear) {
      this.name = name
      this.startYear = startYear
      this.courses = []
    }
  
    addCourse(course) {
      this.courses.push(course)
    }
  }
  class Student extends Person {
    constructor(name, startYear) {
      super(name, startYear)
      this.grades = []
    }
  
    receiveGrade(courseName, finalGrade) {
      this.grades.push({ course: courseName, grade: finalGrade })
    }
  
    addCourse(course) {
      if (!this.courses.includes(course)) {
        super.addCourse(course)
      }
    }
  }
    
  class Teacher extends Person {
    constructor(name, startYear, salary) {
      super(null, startYear) // לא נשתמש ב־name של ההורה
      this.name = "Professor " + name
      this.salary = salary
    }
  
    giveGrade(student, courseName, grade) {
      student.receiveGrade(courseName, grade)
    }
  }
  
  class Principal extends Person {
    constructor(name, startYear) {
      super(name, startYear)
      this.teachers = []
      this.students = []
    }
  
    hireTeacher(teacher) {
      this.teachers.push(teacher)
      console.log(`${this.name} just hired ${teacher.name}`)
    }
  
    recruitStudent(student) {
      this.students.push(student)
    }
  
    expelStudent(student) {
      this.students = this.students.filter(s => s.name !== student.name)
    }
  
    transferStudent(student, principal) {
      this.expelStudent(student)
      principal.recruitStudent(student)
    }
  }
  
  const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

p1.hireTeacher(t1)
p1.hireTeacher(t2)

p1.recruitStudent(s1)
p1.recruitStudent(s2)

p1.expelStudent(s1)

p1.transferStudent(s2, p2)

console.log(p1.students) // []
console.log(p2.students) // [Student: Byron]
