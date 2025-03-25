/*6. In an external file, write a script in which you declare variables to store the following data:
	- your name is
	- your last name
	- study group
	- your year of birth .
Assign the appropriate values to the variables.+
Create and initialize a boolean variable to store your marital status.+
Determine the type of each variable.
Display the values of the variables in the console , according to their type , in the following order : Number , Boolean , String .
Create 2 arbitrary variables of type Null and Undefined respectively . Output their type to the console.*/


let myName='Serhii';
let myLastName='Datsiuk';
let StudyGroup='QC Group';
let BirthOfYear=1987;
let IsMarried= true;


console.log(typeof myName);
console.log(typeof myLastName);
console.log(typeof StudyGroup);
console.log(typeof BirthOfYear);
console.log(typeof Ismarried);
    
console.log(BirthOfYear, IsMarried, myName, myLastName, StudyGroup);

let status = undefined;
let city = null
console.log(typeof status);
console.log(typeof city)