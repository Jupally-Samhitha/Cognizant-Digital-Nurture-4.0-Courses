<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JavaScript Full Demo</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; max-width: 800px; }
    button { padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; }
    div.output {
      margin-top: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      background: #f9f9f9;
      border-radius: 5px;
      white-space: pre-wrap;
      font-family: monospace;
    }
    h2 { margin-top: 2rem; }
    pre { background: #eee; padding: 0.5rem; border-radius: 3px; overflow-x: auto; }
  </style>
</head>
<body>

  <h1>JavaScript Full Concepts Demo</h1>
  <p>This demo includes variables, syntax, data types, operators, conditionals, loops, error handling, functions, closures, higher-order functions, and objects with prototypes.</p>

  <button id="clickBtn">Click Me</button>
  <p id="message"></p>

  <h2>Data Types</h2>
  <div id="dataTypesOutput" class="output"></div>

  <h2>Operators</h2>
  <div id="operatorsOutput" class="output"></div>

  <h2>Conditionals</h2>
  <div id="conditionalsOutput" class="output"></div>

  <h2>Loops</h2>
  <div id="loopsOutput" class="output"></div>

  <h2>Error Handling</h2>
  <div id="errorHandlingOutput" class="output"></div>

  <h2>Functions, Scope, Closures, Higher-Order Functions</h2>
  <div id="functionsOutput" class="output"></div>

  <h2>Objects and Prototypes</h2>
  <div id="objectsOutput" class="output"></div>

  <script>
    // Variables
    let clickCount = 0;
    const greeting = "Hello, welcome to JavaScript Basics!";

    // Event handling
    function handleClick() {
      clickCount++;
      const msg = `Button clicked ${clickCount} time${clickCount > 1 ? 's' : ''}.`;
      console.log(msg);
      document.getElementById('message').textContent = msg;
    }

    // On load execution
    window.onload = function() {
      alert(greeting);

      // Data Types
      const dataTypes = {
        number: 123,
        string: "Hello",
        boolean: false,
        nullValue: null,
        undefinedValue: undefined,
        object: { key: "value" },
        array: [1, 2, 3]
      };

      let typeOutput = '';
      for (const key in dataTypes) {
        typeOutput += `${key}: ${JSON.stringify(dataTypes[key])} (type: ${typeof dataTypes[key]})\n`;
      }
      document.getElementById('dataTypesOutput').textContent = typeOutput;

      // Operators
      const a = 5, b = 3;
      let opOutput = `
a = ${a}, b = ${b}
Addition: ${a + b}
Subtraction: ${a - b}
Multiplication: ${a * b}
Division: ${a / b}
Modulus: ${a % b}
Equal (==): ${a == b}
Strict Equal (===): ${a === b}
      `;
      document.getElementById('operatorsOutput').textContent = opOutput.trim();

      // Conditionals
      const num = 8;
      const conditionalOutput = (num > 5) ? "Greater than 5" : "5 or less";
      document.getElementById('conditionalsOutput').textContent = `Number: ${num} -> ${conditionalOutput}`;

      // Loops
      let loopOutput = '';
      for (let i = 0; i < 5; i++) {
        loopOutput += `Loop iteration ${i + 1}\n`;
      }
      document.getElementById('loopsOutput').textContent = loopOutput;

      // Error Handling
      function riskyFunction() {
        throw new Error("Deliberate error!");
      }
      let errorText = '';
      try {
        riskyFunction();
      } catch (err) {
        errorText = `Caught error: ${err.message}`;
      }
      document.getElementById('errorHandlingOutput').textContent = errorText;

      // Functions, Scope, Closures, Higher-Order Functions
      function outerFunction() {
        let outer = "Outer";
        function innerFunction() {
          return outer + " Inner";
        }
        return innerFunction();
      }

      function makeCounter() {
        let count = 0;
        return function() {
          count++;
          return count;
        };
      }

      const counter = makeCounter();
      function repeatAction(fn, times) {
        let result = '';
        for (let i = 0; i < times; i++) {
          result += fn(i) + '\n';
        }
        return result;
      }

      let fnOutput = '';
      fnOutput += "Scope Example: " + outerFunction() + "\n\n";
      fnOutput += "Closure Example:\n";
      fnOutput += counter() + "\n" + counter() + "\n" + counter() + "\n\n";
      fnOutput += "Higher-Order Function:\n";
      fnOutput += repeatAction(i => `Index: ${i}`, 3);
      document.getElementById('functionsOutput').textContent = fnOutput;

      // Objects and Prototypes
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }

      Person.prototype.greet = function() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
      };

      const person1 = new Person("Alice", 28);
      const person2 = new Person("Bob", 35);

      const objectOutput = `
Person 1: ${person1.name}, Age: ${person1.age}
Greet: ${person1.greet()}

Person 2: ${person2.name}, Age: ${person2.age}
Greet: ${person2.greet()}

Prototype Check: ${Person.prototype.isPrototypeOf(person1)}
      `;

      document.getElementById('objectsOutput').textContent = objectOutput.trim();
    };

    document.getElementById('clickBtn').addEventListener('click', handleClick);
  </script>
</body>
</html>
