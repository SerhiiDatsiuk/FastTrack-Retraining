
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

let Serhii=new User("Serhii", 20);
let Oleg=new User("Oleg", 25);
console.log(Serhii.name); // Serhii
console.log(Serhii.age); // 20


//Task
// 1. Create a class called User with properties name and age.
// 2. Create two instances of the User class with different names and ages.

class Cars {
    constructor (brand, model, type, year){
        this.brand=brand;
        this.model=model
        this.type=type;

}

getInfo(){
    console.log(`This is a brand ${this.brand}, this is a model ${this.model}, TYPE OF CAR IS ${this.type}`);
    console.log(`year of production ${this.year}`);
}
}

let car1 = new Cars('Opel', 'Corsa', 'hatchback', 2015);
let car3 = new Cars('Toyota', 'Auris', 'Combi', 2018);

car1.getInfo();
car3.getInfo();

/****Task******/
//Створи клас Person.
// //У конструктор передай: name, age.
//Додай екземплярний метод introduce(), який виводить: Hi, my name is [name] and I am [age] years old.

class Person {
    constructor (name, age) {
        this.name=name;
        this.age=age;
    }
introduce(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let firstPesron = new Person('Serhii','38');
let secondPerson = new Person ('','');
let thirdPerson = new Person (null, true);
firstPesron.introduce();
secondPerson.introduce();           
thirdPerson.introduce();
//End of Task


  

