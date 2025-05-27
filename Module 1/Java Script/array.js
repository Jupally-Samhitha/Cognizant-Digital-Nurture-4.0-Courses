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
  <p>This demo includes all JavaScript fundamentals: variables, types, operators, conditionals, loops, error handling, functions, scope, closures, higher-order functions, objects, prototypes, and arrays.</p>

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

  <h2>Arrays and Methods</h2>
  <div id="arraysOutput" class="output"></div>

  <script>
    // Variables
    let clickCount = 0;
    const greeting = "Hello, welcome to JavaScript Basics!";

    // Event handler
    function handleClick() {
      clickCount++;
      document.getElementById('message').textContent = `Button clicked ${clickCount} time${clickCount > 1 ? 's' : ''}.`;
    }

    window.onload = function() {
      alert(greeting);

      // Data Types
      const dataTypes = {
        number: 42,
        string: "JS",
        boolean: true,
        nullValue: null,
        undefinedValue: undefined,
        object: { js: "awesome" },
        array: [10, 20, 30]
      };

      let typeOutput = '';
      for (const key in dataTypes) {
        typeOutput += `${key}: ${JSON.stringify(dataTypes[key])} (type: ${typeof dataTypes[key]})\n`;
      }
      document.getElementById('dataTypesOutput').textContent = typeOutput;

      // Operators
      const a = 8, b = 3;
      const opOutput = `
a = ${a}, b = ${b}
Addition: ${a + b}
Multiplication: ${a * b}
Equal (==): ${a == b}
Strict Equal (===): ${a === b}
      `;
      document.getElementById('operatorsOutput').textContent = opOutput.trim();

      // Conditionals
      const num = 6;
      const condResult = num > 5 ? "Greater than 5" : "5 or less";
      document.getElementById('conditionalsOutput').textContent = `num = ${num} → ${condResult}`;

      // Loops
      let loopText = '';
      for (let i = 0; i < 3; i++) {
        loopText += `Loop ${i + 1}\n`;
      }
      document.getElementById('loopsOutput').textContent = loopText;

      // Error Handling
      try {
        throw new Error("This is a sample error.");
      } catch (err) {
        document.getElementById('errorHandlingOutput').textContent = `Error Caught: ${err.message}`;
      }

      // Functions & Scope
      function outer() {
        let outerVar = "Outer Scope";
        function inner() {
          return `Accessing from inner: ${outerVar}`;
        }
        return inner();
      }

      // Closure
      function counterClosure() {
        let count = 0;
        return function() {
          return ++count;
        };
      }
      const myCounter = counterClosure();

      // Higher-order function
      function doTimes(n, fn) {
        let results = '';
        for (let i = 0; i < n; i++) {
          results += fn(i) + '\n';
        }
        return results;
      }

      const fnText = `
Scope Example: ${outer()}
Closure Calls: ${myCounter()}, ${myCounter()}, ${myCounter()}
Higher-order Example:
${doTimes(3, i => 'Run #' + (i + 1))}
      `;
      document.getElementById('functionsOutput').textContent = fnText.trim();

      // Objects and Prototypes
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.speak = function() {
        return `${this.name} makes a sound.`;
      };

      const dog = new Animal("Buddy");
      const cat = new Animal("Kitty");

      const objOutput = `
Animal 1: ${dog.name} → ${dog.speak()}
Animal 2: ${cat.name} → ${cat.speak()}
Prototype check: ${Animal.prototype.isPrototypeOf(dog)}
      `;
      document.getElementById('objectsOutput').textContent = objOutput.trim();

      // Arrays and Methods
      const fruits = ["apple", "banana", "cherry", "date"];
      const nums = [2, 4, 6, 8];

      const arrayText = `
Original Fruits: ${fruits.join(', ')}
Pushed "elderberry": ${(() => { fruits.push("elderberry"); return fruits.join(', '); })()}
Popped: ${fruits.pop()} → Now: ${fruits.join(', ')}
Mapped nums * 2: ${nums.map(n => n * 2)}
Filtered > 4: ${nums.filter(n => n > 4)}
Includes 'banana': ${fruits.includes("banana")}
Index of 'cherry': ${fruits.indexOf("cherry")}
      `;
      document.getElementById('arraysOutput').textContent = arrayText.trim();
    };

    document.getElementById('clickBtn').addEventListener('click', handleClick);
  </script>
</body>
</html>

