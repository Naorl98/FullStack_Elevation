import { Cleaner } from "./Cleaner.js";
import { Manager } from "./Manager.js";

export class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }

  hireCleaner(name) {
    const cleaner = new Cleaner(name);
    this.cleaners.push(cleaner);
  }

  hireManager(name) {
    const manager = new Manager(name);
    this.managers.push(manager);
  }

  startWorkDay() {
    this.managers.forEach(manager => manager.askEmployeesToWork());
    this.cleaners.forEach(cleaner => cleaner.clean());
  }
}
