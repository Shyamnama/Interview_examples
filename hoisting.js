// y();
// console.log(x);
var x = 10;

function y() {
  // var y1;
  // var y2;

  console.log("Hello world!!!");
  console.log(y1);
  console.log(y2);
  console.log(z1);
  i();

  var y1 = 20;
  var y2 = 30;
  var z1 = 40;

  function i() {
    console.log("Functional hoisting");
  }
}
y();

// var y = () => {
//   console.log("YYYY");
// }

// function y() {
//   console.log("second");
// }

/*
1.  JS allocates memory for variable and assigned them undefined when code is initially run
    and saves functions as it is in the memory.

2.  In hoisting first functional hoisting is allocated memory and then variable hoisting is done.

3.  If we use same name for multiple functions then it will replace the previous function statement

4.  if we write function as arrow function or assign an anonymous function to a variable then it
    will be stored in memory as variable and they will be undefined.

5.  when we call/invoke the function then the function which is saved in the memory will be
    executed and create a new code execution within the Global execution when the function
    is return or executed then the call stack will empty and return the control to the
    Global execution
*/
