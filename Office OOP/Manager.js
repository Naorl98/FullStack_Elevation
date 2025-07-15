import { Document } from "./Document.js";

export class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  hireEmployee(empName) {
    const newDoc = new Document(empName);
    this.employees.push(newDoc);
  }

  askEmployeesToWork() {
    this.employees.forEach(doc => {
      console.log(doc.EmployeeName + " is working");
    });
  }
}
