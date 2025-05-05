/****************Task1********************/
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error("Both width and height must be numbers");
    }
    return width * height;
  }
  

  try {
    let area = calcRectangleArea(5, '10'); 
    console.log("Area of rectangle:", area);
  } catch (err) {
    console.log("An error occurred:", err.message);
  }
  
/****************Task2********************/
function checkAge() {
    try {
      let age = prompt("Please enter your age:");
  
      if (age === null || age.trim() === "") {
        throw new Error("The field is empty! Please enter your age.");
      }
  
      if (isNaN(age)) {
        throw new Error("You entered a non-numeric value.");
      }
  
      age = Number(age);
      if (age < 14) {
        throw new Error("You are too young. Minimum age is 14.");
      }
  
      alert("Access granted. You can watch the movie.");
    } catch (err) {
      alert(`Error name: ${err.name}\nError message: ${err.message}`);
    }
  }
  
  checkAge(); 
  
  /****************Task3********************/


class MonthException {
    constructor(message) {
      this.name = 'MonthException'; 
      this.message = message;      
    }
  }
  
  function showMonthName(month) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
   
    if (month < 1 || month > 12) {
    
      throw new MonthException('Incorrect month number');
    }
  

    return months[month - 1];
  }
  

  try {
    console.log(showMonthName(5));    
    console.log(showMonthName(14));   
  } catch (err) {
    console.log(`${err.name} ${err.message}`); 
  }
  