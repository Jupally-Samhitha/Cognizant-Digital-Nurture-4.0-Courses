<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JavaScript Basics & Setup</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; max-width: 700px; }
    button { padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; }
    #message, #dataTypesOutput, #operatorsOutput, #conditionalsOutput, #loopsOutput, #errorHandlingOutput,
    #functionsOutput {
      margin-top: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      background: #f9f9f9;
      border-radius: 5px;
      white-space: pre-wrap;
      font-family: monospace;
    }
    h2 { margin-top: 2rem; }
    pre { background: #eee; padding: 0.5rem; border-radius: 3px; }
  </style>
</head>
<body>

  <h1>JavaScript Basics & Setup Demo</h1>

  <p>This demo shows variables, functions, event handling, console logging, syntax, data types, operators, conditionals, loops, error handling, and now functions with scope, closures, and higher-order functions.</p>

  <button id="clickBtn">Click Me</button>
  <p id="message"></p>

  <h2>JavaScript Syntax Example</h2>
  <pre>
    // Function definition
    function greet(name) {
      return "Hello, " + name + "!";
    }
  </pre>

  <h2>Data Types Demonstration</h2>
  <div id="dataTypesOutput"></div>

  <h2>Operators Demonstration</h2>
  <div id="operatorsOutput"></div>

  <h2>Conditionals Example</h2>
  <pre>
    let num = 10;
    if (num > 5) {
      console.log("Number is greater than 5");
    } else {
      console.log("Number is 5 or less");
    }
  </pre>
  <div id="conditionalsOutput"></div>

  <h2>Loops Example</h2>
  <pre>
    for(let i = 1; i &lt;= 5; i++) {
      console.log("Loop iteration: " + i);
    }
  </pre>
  <div id="loopsOutput"></div>

  <h2>Error Handling Example</h2>
  <pre>
    try {
      let result = riskyFunction();
      console.log(result);
    } catch (error) {
      console.error("Error caught:", error.message);
    }
  </pre>
  <div id="errorHandlingOutput"></div>

  <h2>Functions, Scope, Closures, and Higher-Order Functions</h2>
  <pre>
  // Function Scope Example
  function outerFunction() {
    let outerVar = 'Outer';
    function innerFunction() {
      let innerVar = 'Inner';
      return outerVar + ' & ' + innerVar;
    }
    return innerFunction();
  }

  // Closure Example
  function makeCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    }
  }

  // Higher-Order Function Example
  function repeatAction(action, times) {
    for(let i = 0; i &lt; times; i++) {
      action(i);
    }
  }
  </pre>
  <div id="functionsOutput"></div>

  <script>
    // Variable declaration
    let clickCount = 0;
    const greeting = "Hello, welcome to JavaScript Basics!";

    // Function to update message and log to console
    function handleClick() {
      clickCount++;
      const msg = `Button clicked ${clickCount} time${clickCount > 1 ? 's' : ''}.`;
      console.log(msg);
      document.getElementById('message').textContent = msg;
    }

    window.onload = function() {
      console.log(greeting);
      alert(greeting);

      // Data Types Example
      const dataTypes = {
        number: 42,
        string: "Sample text",
        boolean: true,
        nullValue: null,
        undefinedValue: undefined,
        object: { name: "Alice", age: 30 },
        array: [1, 2, 3]
      };

      let output = '<ul>';
      for (const [key, value] of Object.entries(dataTypes)) {
        output += `<li><strong>${key}:</strong> ${JSON.stringify(value)} (type: ${typeof value})</li>`;
      }
      output += '</ul>';
      document.getElementById('dataTypesOutput').innerHTML = output;

      // Operators Example
      const a = 10;
      const b = 3;
      const operatorsText = `
a = ${a}, b = ${b}
Addition (a + b): ${a + b}
Subtraction (a - b): ${a - b}
Multiplication (a * b): ${a * b}
Division (a / b): ${a / b}
Modulus (a % b): ${a % b}
Exponentiation (a ** b): ${a ** b}
Increment (a++): ${a + 1}
Decrement (b--): ${b - 1}
Equality (a == b): ${a == b}
Strict Equality (a === b): ${a === b}
      `;
      document.getElementById('operatorsOutput').innerHTML = operatorsText;

      // Conditionals Example
      let num = 10;
      let conditionalMsg = '';
      if (num > 5) {
        conditionalMsg = `Number (${num}) is greater than 5.`;
        console.log(conditionalMsg);
      } else {
        conditionalMsg = `Number (${num}) is 5 or less.`;
        console.log(conditionalMsg);
      }
      document.getElementById('conditionalsOutput').textContent = conditionalMsg;

      // Loops Example
      let loopsMsg = '';
      for(let i = 1; i <= 5; i++) {
        loopsMsg += `Loop iteration: ${i}\n`;
        console.log(`Loop iteration: ${i}`);
      }
      document.getElementById('loopsOutput').textContent = loopsMsg;

      // Error Handling Example
      function riskyFunction() {
        // Intentionally throwing an error for demo
        throw new Error("Something went wrong!");
      }

      let errorMsg = '';
      try {
        let result = riskyFunction();
        errorMsg = `Result: ${result}`;
      } catch (error) {
        errorMsg = `Error caught: ${error.message}`;
        console.error(errorMsg);
      }
      document.getElementById('errorHandlingOutput').textContent = errorMsg;

      // Functions, Scope, Closures, Higher-Order Functions

      // Function Scope Example
      function outerFunction() {
        let outerVar = 'Outer';
        function innerFunction() {
          let innerVar = 'Inner';
          return outerVar + ' & ' + innerVar;
        }
        return innerFunction();
      }
      const scopeResult = outerFunction();

      // Closure Example
      function makeCounter() {
        let count = 0;
        return function() {
          count++;
          return count;
        }
      }
      const counter = makeCounter();
      let closureResult = '';
      closureResult += 'Counter calls:\n';
      closureResult += counter() + '\n';
      closureResult += counter() + '\n';
      closureResult += counter() + '\n';

      // Higher-Order Function Example
      function repeatAction(action, times) {
        for(let i = 0; i < times; i++) {
          action(i);
        }
      }
      let repeatResult = 'repeatAction output:\n';
      repeatAction(i => {
        repeatResult += `Action called at iteration ${i}\n`;
      }, 3);

      const functionsOutputText = `
Function Scope Example:
outerFunction() returns -> ${scopeResult}

Closure Example:
${closureResult.trim()}

Higher-Order Function Example:
${repeatResult.trim()}
      `;

      document.getElementById('functionsOutput').textContent = functionsOutputText;
    };

    // Add event listener to button
    document.getElementById('clickBtn').addEventListener('click', handleClick);
  </script>

</body>
</html>
