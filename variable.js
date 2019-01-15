/*================
******Differences/Similarities among let, const and var****
- let & const are block scope i.e. variables declared with "let" & "const" scope within a curly bracket {} can only be accessed within the curly bracket where they are defined while var is function scope i.e variables declared with "var" within a function can be accessed anywhere within the function but not outside the function.  

- While variables declared with let & var can be declared without being initialized, variable declared with const must be initialized during declaration. 

- While variables declared and initialized with let & var can be mutated i.e. the variables can be reassigned, and their values can be altered for both primitive data type (like boolean, number, string) and reference data type (like array & object). For example, the below declarations are correct:
var first = 10; let second = [3, 6] ;
first = 7; second = [4, 9];
variable declared with const cannot be mutated i.e the variable cannot be reaasigned. For example, the below declarations are incorrect:
const something = 10; const someObj ={name:"Doe"};
const something = 8; const someObj ={name:"John"};
However, values of reference type data declared with const can be altered. For example, the below declarations are correct: 
const someObj ={name:"Doe"};
someObj.name = "John";
console.log(someObj); // Output : {name: "John"}

const constArr = [1, 2, 3];
constArr.push(6, 8);
constArr[0] = 5;
console.log(constArr); // Output: [5, 2, 3, 6, 8]



***Hoisting****
Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted. 

Basically, when Javascript compiles all of your code, all variable declarations using 'var' are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”. It should be noted however that only the variable declaration and not its initialization is hoisted i.e. the variable value remains in its exact position.

Functions declarations are also hoisted, but these go to the very top, so will sit above all of the variable declarations.

However variable declarations using 'let' & 'const' and function expressions are not hoisted.
==================*/


// "var" function scope

function varScope (){
  var x = 10;
  var isTrue = true;

  if(isTrue){
    var y = 20;
    console.log(y-x); // Output 10
  }
 
  // variable y is accessible anywhere within the function. 
  console.log(x+y); // Output 30
}

// call varScope function
varScope();


// "let" block scope
function letScope (){
  let x = 10;
  let isTrue = true;

  if(isTrue){
    let y = 20;
    console.log(y/x);  // Output: 2
  }

 // variable y is only accessible within block where it's declared.
  //console.log(x+y); // Output: variable.js:49 Uncaught ReferenceError: y is not defined
}

// call letScope function
letScope();


function constScope (){
  const x = 10;
  const isTrue = true;

  if(isTrue){
    const y = 20;
    console.log(x*y);  // Output:200
  }
  
 // variable y is only accessible within block where it's declared.
  // console.log(x+y); // Output: variable.js:69 Uncaught ReferenceError: y is not defined
}

// call constScope function
constScope();


// Variable (declared with 'var') and function declarations hoisting
console.log(hoistedVariable); //Output: undefined. This is because only the variable and not its initial is hoisted. 
hoistedFunction();
var hoistedVariable = 50;

function hoistedFunction(){
console.log('this function declaration is hoisted');
}
 
// Variable declarations (with 'let' & const) and function expressions are not hoisted

/*

hoistedFunction2();  // Output: variable.js:101 Uncaught ReferenceErrorhoistedFunction2 is not a function. 
//console.log(unhoistedVariable); //Output:  variable.js:102 Uncaught ReferenceError:unhoistedVariable is not defined.  
let unhoistedVariable = 100;

var hoistedFunction2 = function (){
  console.log('function expression cannot be hoisted');
  }
*/

