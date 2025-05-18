//Task 1

let x = 1;
let y = 2;

let res1 = "" + x +y;
console.log(res1); 


let res2 = (x < y) + "" + y;
console.log(res2); 
console.log( typeof res2); 


let res3 = (x < y);
console.log(res3);
console.log( typeof res3); 


let res4 = (x - y) * "a";
console.log(res4); 
console.log( typeof res4);



//Task 2
/*The user enters a number (use prompt ()) . It is necessary to check whether the entered number is correct
	a ) even m is positive;
	b ) a multiple of 7.
Display the result of the check in the console.
*/





// Task3 
/*Create an empty array;
1) Write any number in the first element of the array;
2) Write any line in the second element of the array;
3) Write any logical value in the third element of the array;
4) Write the value null in the fourth element of the array ;
5) Enter the number of elements stored in the array on the screen;
6) Ask the user to enter any value and write this value in the fifth element of the array;
7) Display the fifth array element on the screen.
8) Delete the 1st element of the array and display the array on the screen.
*/

let MyArray = [];
MyArray[0] =1;
MyArray[1]= 'Any Line';
MyArray[2]= 2>1;
MyArray[3]=null;
console.log(MyArray.length);
MyArray[4] = prompt('Please enter any value');
console.log(MyArray[4]);
let removedElement = MyArray.shift();
console.log(MyArray); 


//Task4
/*. Write a program that combines all existing elements of the array into a ribbon and separates them with the symbol “*”.
Initial array :
let cities = [" Rome ", " Lviv ", " Warsaw "]; 
Result :
" Rome * Lviv * Warsaw "
*/

let cities = [" Rome ", " Lviv ", " Warsaw "];
let result=cities.join('*');
console.log('"'+ result +'"')

//Task5
/*Using the prompt () function , ask the user a question about reaching the age of majority. 
Record the result in the isAdult variable. Depending on the received value, 
display the appropriate message about the person's status. 
For example: 
-if the condition is fulfilled, the age is more than 18, output "You have reached the age of majority". 
-If the age is less than 18 years, display "You are still too young",
*/

let isAdult=prompt('How old are you?');

isAdult=Number(isAdult);

if (isAdult > 18) {
	console.log('You have reached the age of majority');
}
else if (isAdult < 18) {
console.log("You are still too young")
}

//Task6
/*The user enters the three lengths of the sides of the triangle (use prompt() three times to enter each side).
Necessary
	a ) determine and display the area of the triangle in the console
	b ) check whether this triangle is rectangular and output the check result to the console.
Validate whether user-entered values are correct, otherwise display ' Incorrect data '. 
Output the result of calculating the area of the triangle to the console with an accuracy of 3 decimal places 
(for example : 8.42355465 = > 8.424)



//Task7
/*Write a conditional construction that, depending on the time of day, will display the appropriate greeting. 
You need to get the real time of day from the system. Do it in 2 ways through 2 different conditional operators.
In the range of hours 23-5 - the greeting " Good night " should be displayed
In the range of hours 5-11 - the greeting " Good morning " should be displayed
In the range of hours 11-17 - the greeting " Good day " should be displayed
In the range of hours 17-23 - the greeting " Good evening " should be displayed.
*/

let now = new Date();
let TimeOfTheDay = now.getHours();

if (TimeOfTheDay >= 23 || TimeOfTheDay <= 5) {
	console.log(" Good night ");
}
else if (TimeOfTheDay >= 5 && TimeOfTheDay <= 11) {
	console.log(" Good morning ");
}
else if (TimeOfTheDay >= 11 && TimeOfTheDay <= 17) {
	console.log(" Good day ");
}
else {
	console.log(" Good evening");
}
