// a();
// b();

//Function Statement aka Function Declaration
function a() {
  console.log("Function Statement");
}

//Function Expression
var b = function () {
  console.log("Functions that acts like value");
};

/*
  Difference between Function Statement and Function Expression is hoisting 
*/

//Anonymous Function

// function(){

// }

/*
  Anonymous functions are used when functions are used as variables
*/

//Named Function Expression

var c = function namedFunctionExp() {
  console.log(namedFunctionExp);
};
//c();

/*
  namedFunctionExp cannot be accessed in global space it can only access in variable c.
*/

//Diffrence between Parameters and Arguments

var d = function (param1, param2) {
  console.log(param1, param2);
};

// d(1, 5);

var firstName = "James",
  lastName = "Johnson";

var user1 = {
  firstName: "Joe",
  lastName: "Biden",
};

var user2 = {
  firstName: "Donald",
  lastName: "Trump",
};

var fullName = function () {
  setTimeout(() => {
    console.log(this.firstName + " " + this.lastName);
  }, 1000);
};

fullName.call(user1);
fullName.call(user2);

/*
  labels which are pass in functions that are local variable in function are 
  known as parameters and the values that are passing when the function in 
  called is arguments.
*/

//First Class Functions

/*
  Ability to use functions as values and passing in another functions or return a 
  function is known as First Class Functions
*/

// USING CALL AND APPLY

/* call
  1. funtion.call(this, arg1, arg2);
  2. The first argument is an object that will become of the value of this.
  3. One or more arguments to be sent to the function may follow.
*/

/* apply
  1. function.apply(this, [arg1, arg2]);
  2. The first argument is an object that will become of the value of this.
  3. One or more arguments to be sent to the function may follow in a single array.
*/
