// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction is able to access internal because myFunction is the parent of it
// functions cannot look down for variables but they can use variables declared above them

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation(num){
  let counter = 0;

  while(num > 0){
    counter += num--;
  }

  return counter;
}
console.log(sumation(4)); // 10
console.log(sumation(10)); // 55
console.log(sumation(25)); // 325