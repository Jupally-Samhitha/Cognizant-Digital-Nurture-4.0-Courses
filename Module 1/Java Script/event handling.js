<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JavaScript Full Demo with Events</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; max-width: 900px; }
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
    #dom-box {
      margin-top: 1rem;
      padding: 1rem;
      background: #e0f7fa;
      border-radius: 8px;
      border: 2px dashed #0097a7;
    }
  </style>
</head>
<body>

  <h1>JavaScript Fundamentals + DOM + Events</h1>
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

  <h2>DOM Manipulation</h2>
  <button id="domChangeBtn">Change DOM</button>
  <div id="dom-box">This is the original box content.</div>

  <h2>Event Handling</h2>
  <input type="text" id="nameInput" placeholder="Type your name..." />
  <button id="greetBtn">Greet</button>
  <p id="greetOutput"></p>

  <script>
    // Variables
    let clickCount = 0;
    const greeting = "Hello, welcome to JavaScript Basics!";

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

    // On Load
    window.onload = function() {
      alert(greeting);

      // Show Data Types
      let typeOutput = '';
      for (const key in dataTypes) {
        typeOutput += `${key}: ${JSON.stringify(dataTypes[key])} (type: ${typeof dataTypes[key]})\n`;
      }
      document.getElementById('dataTypesOutput').textContent = typeOutput;

      // Operators
      const a = 8, b = 3;
      document.getElementById('operatorsOutput').textContent =
        `a = ${a}, b = ${b}\nAddition: ${a + b}\nMultiplication: ${a * b}\n== : ${a == b}\n=== : ${a === b}`;

      // Conditionals
      const num = 6;
      document.getElementById('conditionalsOutput').textContent =
        `num = ${num} → ${num > 5 ? "Greater than 5" : "5 or less"}`;

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

      // Functions & Closures
      function outer() {
        let outerVar = "Outer Scope";
        function inner() {
          return `Accessing from inner: ${outerVar}`;
        }
        return inner();
      }

      function counterClosure() {
        let count = 0;
        return function() {
          return ++count;
        };
      }

      const myCounter = counterClosure();

      function doTimes(n, fn) {
        let results = '';
        for (let i = 0; i < n; i++) {
          results += fn(i) + '\n';
        }
        return results;
      }

      document.getElementById('functionsOutput').textContent = `
Scope Example: ${outer()}
Closure: ${myCounter()}, ${myCounter()}
Higher-order Function:
${doTimes(3, i => "Count: " + i)}
      `.trim();

      // Objects and Prototypes
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.speak = function() {
        return `${this.name} makes a sound.`;
      };

      const dog = new Animal("Buddy");
      const cat = new Animal("Kitty");

      document.getElementById('objectsOutput').textContent = `
Animal 1: ${dog.name} → ${dog.speak()}
Animal 2: ${cat.name} → ${cat.speak()}
      `.trim();

      // Arrays and Methods
      const fruits = ["apple", "banana", "cherry"];
      const nums = [1, 2, 3, 4, 5];

      document.getElementById('arraysOutput').textContent = `
Fruits: ${fruits.join(', ')}
Add fruit: ${(() => { fruits.push("date"); return fruits.join(', '); })()}
Map *2: ${nums.map(n => n * 2).join(', ')}
Filter >3: ${nums.filter(n => n > 3).join(', ')}
      `.trim();
    };

    // Event Handling: Button Click
    document.getElementById('clickBtn').addEventListener('click', () => {
      clickCount++;
      document.getElementById('message').textContent = `Button clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}.`;
    });

    // DOM Manipulation
    document.getElementById('domChangeBtn').addEventListener('click', () => {
      const box = document.getElementById('dom-box');
      box.textContent = "🎉 DOM Updated! You changed the content!";
      box.style.backgroundColor = "#dcedc8";
      box.style.color = "#33691e";
    });

    // Event Handling: Greeting
    document.getElementById('greetBtn').addEventListener('click', () => {
      const name = document.getElementById('nameInput').value.trim();
      const greetOutput = document.getElementById('greetOutput');
      if (name) {
        greetOutput.textContent = `Hello, ${name}! 👋`;
        greetOutput.style.color = "#2e7d32";
      } else {
        greetOutput.textContent = "Please enter your name.";
        greetOutput.style.color = "red";
      }
    });
  </script>
</body>
</html>
