/* ================================================================
   JavaScript — Week 3 — Lab 1 · Exercise 1 (functions)  [BARE-SPEC]
   ----------------------------------------------------------------
   TASK
     1. Function DECLARATION  add(a, b)      → a + b
     2. Function EXPRESSION   subtract(a, b) → a - b
     3. Arrow, no braces      multiply = (a, b) => a * b
     4. Arrow, 1 param        double = n => n * 2
     5. Arrow, WITH braces (needs `return`)  divide = (a, b) => {...} → a / b
     6. Function DECLARATION  greet(name = "Guest") → "Hello, " + name + "!"
     7. CALLBACK: write announce(name, callback) — it calls
        callback() and returns "Hello, " + name + " | " + the
        callback's result. Write sayBye() → "Goodbye!". Then call
        announce("Alice", sayBye).
     8. Call all of the above, print the results below.

   EXPECTED OUTPUT
     resultAdd: 7
     resultSubtract: 6
     resultMultiply: 15
     resultDouble: 12
     resultDivide: 5
     greetDefault: Hello, Guest!
     greetNara: Hello, Nara!
     announcement: Hello, Alice | Goodbye!

   RUN:  node assignment/lab1/exercise1.js
   ================================================================ */

// Write your code below.

function add(a, b) {
  return a +b;
}

function subtract(a, b) {
  return a-b;
}

const multiply = (a,b) => a*b;

const double = n => n*2;

const divide = (a,b) => {
  return a/b;
}

function greet (name = "Guest"){
  return "Hello, " + name + "!"
}

function announce(name, callback) {
  return "Hello, " + name + " | " + callback();
}

function sayBye() {
  return "Goodbye!";
}



console.log("resultAdd: ", add(3,4));
console.log("resultSubtract: ", subtract(10,4));
console.log("resultMultiply: ", multiply(3,5));
console.log("resultDouble: ", double(6));
console.log("resultDivide: ", divide(10,2));
console.log("greetDefault: ", greet());
console.log("greetNara: ", greet("Nara"));
console.log("announcement: ", announce("Alice", sayBye));