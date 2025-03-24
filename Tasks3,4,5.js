
/*a ) declare two variables;+
b ) write any values in the variable;+
c ) display the values of the variables on the screen;
d ) copy the value of one variable to another;
e ) display the values of the variables on the screen.*/


let age = 18;
let name = 'MisterX';
console.log(age, name);
name = age;
console.log(age, name);



/*Create an object with the following 5 properties : “ String ”, “ Number ”, “ Boolean ”, “ Undefined ”, “ Null ” . 
The value of each property must correspond to the corresponding primitive data type.*/

let datatypes = {
    String: "Opel",       
    Number: 330,          
    Boolean: true,        
    Undefined: undefined, 
    Null: null            
};



/*Using the confirm() function, ask the user a question about reaching the age of majority. 
Record the result in the isAdult variable and output it to the console.*/
	
let isAdult = confirm("Are you 18 or older?");
console.log(isAdult);


