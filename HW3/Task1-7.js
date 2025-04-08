//Task1
/*We have the array with elements [2, 3, 4, 5]. Use the loop “for” to find the product of the elements of this array. 
Also implement tasks through “while” loop.*/

let arr = [2, 3, 4, 5];
let product = 1;

for (let i = 0; i < 4; i++) {
    product *= arr[i];
}

console.log(product); 



//Task2
/*
Write JavaScript “for” loop that will iterate from 0 to 15. For each iteration, it will check whether the current number 
is even or odd and display a message on the screen.
Sample Output: 
"0 is even" 
"1 is odd" "2 is even" */

for (let i=0; i<=15; i++) {
    if (i %2 ===0) {
        console.log(i+ ' is even')
    }
    else if(i %2!==0) {
        console.log(i+' is odd')
    }

}

//Task3
/* Write a function randArray ( k ) that will fill an array of k random integers. Random numbers are generated 
from the range 1-500.

Sample Output :
randArray ( 5 ); // [ 399,310,232,379,40 ]*/

function randArray(k) {
    let result = [];
    for (let i = 0; i < k; i++) {
        let randomNum = Math.floor(Math.random() * 500) + 1;
        result.push(randomNum);
    }
    return result;
}

console.log(randArray(5));

//Task4
/*
Write the function raiseToDegree(a, b), which returns the result of raising the number a to the power of b . The function works only with integers. Implement the interface for entering numbers a , b from the keyboard.
Sample Output :
raiseToDegree ( 3 , 4 ); // 81
*/

function raiseToDegree(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a ** b;
    } else {
      return " Please enter valid integers.";
    }
  }
  
  let a = prompt("Enter number a:");
  let b = prompt("Enter number b:");
  let result = raiseToDegree(a, b);
  console.log("Result:", result);

  

  //Task5
/*Implement the findMin() function , which should accept an arbitrary number of numeric arguments and return the one with the smallest value. Tip: you can use the special arguments array for the solution .
Sample Output :
findMin (12, 14, 4, -4, 0.2); // => - 4
*/

function findMin() {
    let min = arguments[0]; 
  
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i]; 
      }
    }
  
    return min; 
  }
  
  console.log(findMin(12, 14, 4, -4, 0.2)); 
  
//Task6
/*
Write the function findUnique(arr), which accepts an array “arr” and checks if all elements of array are unique ( no doubles ), then function will return true if all elements are unique, otherwise - false.
Sample Output :
findUnique ([1, 2, 3, 5, 3]); // => false
findUnique ([1, 2, 3, 5, 11 ]); // => true
*/

function findMin() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  
  console.log(findMin(12, 14, 4, -4, 0.2)); // => -4
  
  //Task7
  /*
  function lastElem(arr, x = 1) {
  return arr.slice(-x);
}

console.log(lastElem([3, 4, 10, -5]));      // => -5
console.log(lastElem([3, 4, 10, -5], 2));   // => [10, -5]
console.log(lastElem([3, 4, 10, -5], 8));   // => [3, 4, 10, -5]
*/

//Task8
/*
Write a function that takes a string as an argument and converts the first letter of each word of the string to uppercase .

Input string : 'i love java script'
Output string: 'I Love Java Script'
*/

function capitalizeWords(str) {
    return str
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
      .join(' ');  
  }
  
  console.log(capitalizeWords('i love java script')); // => 'I Love Java Script'
  