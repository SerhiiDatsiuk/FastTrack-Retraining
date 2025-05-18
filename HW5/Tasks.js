/********************Task1*******************/

let mentor = {
    course: 'JS fundamental',
    duration: '3',
    direction: 'web development'

};

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

console.log(propsCount(mentor));
 


/********************Task2*******************/

let arbitraryObject = {
  property1: 'Day',
  property2: 'Month',
  property3: 'Year',
  property4: 'FiscalYear',
  property5: 'Holiday',
};

function showProps(currentObject) {
  let keys = Object.keys(currentObject);    
  let values = Object.values(currentObject); 

  console.log('Properties:', keys);
  console.log('Values:', values);
}

showProps(arbitraryObject);


/********************Task3*******************/


class Person {
    constructor (name, surname) {
    this.name = name;
    this.surname=surname;
    }
    showFullName(){
        console.log(`My name is - ${this.name} and my surname is ${this.surname}`)
    }
}


class Student extends Person {
    constructor (name, surname, year) {
    super(name, surname);
    this.year = year;
}

  showFullName(middleName) {
    return `${this.surname} ${this.name} ${middleName}`;
  }
  
  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    if (course >= 1 && course <= 6) {
      return course;
    } else {
      return "Graduated or invalid year";
    }
  }
}


const stud1 = new Student("Serhii", "Datsiuk", 2020);

console.log(stud1.showFullName("Anatoliyovych")); 
console.log("Current course: " + stud1.showCourse()); 

/********************Task4*******************/


class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
    return salary;
  }

  showSalaryWithExperience() {
    const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
    console.log(`${this.fullName} salary: ${salaryWithExp}`);
    return salaryWithExp;
  }

  get showExp() {
    return this.#experience;
  }

  set setExp(value) {
    this.#experience = value;
  }
}
