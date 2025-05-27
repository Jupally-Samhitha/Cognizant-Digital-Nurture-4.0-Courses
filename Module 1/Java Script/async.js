<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JavaScript Full Demo with Async</title>
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

  <h1>JavaScript Fundamentals + Async</h1>
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

  <h2>Functions, Closures, HOFs</h2>
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

  <h2>Async JavaScript</h2>
  <button id="fetchBtn">Fetch Joke</button>
  <div id="asyncOutput" class="output">Click the button to load a random joke...</div>

  <script>
    let clickCount = 0;
    const greeting = "Hello from JavaScript!";

    // Data Types
    const dataTypes = {
      number: 42,
      string: "JS",
      boolean: true,
      nullVal: null,
      undefVal: undefined,
      object: { js: "awesome" },
      array: [10, 20, 30]
    };

    window.onload = () => {
      alert(greeting);

      let dtText = '';
      for (const key in dataTypes) {
        dtText += `${key}: ${JSON.stringify(dataTypes[key])} (type: ${typeof dataTypes[key]})\n`;
      }
      document.getElementById('dataTypesOutput').textContent = dtText;

      // Operators
      const a = 5, b = 2;
      document.getElementById('operatorsOutput').textContent =
        `a = ${a}, b = ${b}\n+ : ${a + b}\n== : ${a == b}\n=== : ${a === b}`;

      // Conditionals
      const x = 7;
      document.getElementById('conditionalsOutput').textContent =
        x > 5 ? "Greater than 5" : "5 or less";

      // Loops
      let loopText = "";
      for (let i = 0; i < 3; i++) loopText += `Loop ${i}\n`;
      document.getElementById('loopsOutput').textContent = loopText;

      // Error Handling
      try {
        throw new Error("Something went wrong!");
      } catch (e) {
        document.getElementById('errorHandlingOutput').textContent = e.message;
      }

      // Functions and Closures
      function outer() {
        let outerVar = "I'm from outer";
        return function inner() {
          return outerVar;
        };
      }
      const closureFunc = outer();

      function repeat(n, fn) {
        let out = "";
        for (let i = 0; i < n; i++) out += fn(i) + "\n";
        return out;
      }

      document.getElementById('functionsOutput').textContent = `
Closure: ${closureFunc()}
HOF: \n${repeat(3, i => `Index: ${i}`)}
      `.trim();

      // Prototypes
      function Animal(name) {
        this.name = name;
      }
      Animal.prototype.speak = function () {
        return `${this.name} makes a sound.`;
      };
      const dog = new Animal("Rex");

      document.getElementById('objectsOutput').textContent =
        `${dog.name} says: ${dog.speak()}`;

      // Arrays
      const nums = [1, 2, 3, 4];
      document.getElementById('arraysOutput').textContent =
        `Original: ${nums.join(', ')}\nMapped: ${nums.map(n => n * 2).join(', ')}`;
    };

    // Click Event
    document.getElementById('clickBtn').addEventListener('click', () => {
      clickCount++;
      document.getElementById('message').textContent = `Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''}`;
    });

    // DOM Change
    document.getElementById('domChangeBtn').addEventListener('click', () => {
      const box = document.getElementById('dom-box');
      box.textContent = "🎉 DOM Updated!";
      box.style.backgroundColor = "#dcedc8";
    });

    // Greet Event
    document.getElementById('greetBtn').addEventListener('click', () => {
      const name = document.getElementById('nameInput').value.trim();
      const output = document.getElementById('greetOutput');
      if (name) {
        output.textContent = `Hello, ${name}! 👋`;
        output.style.color = "#2e7d32";
      } else {
        output.textContent = "Please enter your name.";
        output.style.color = "red";
      }
    });

    // Async JS – Joke Fetcher
    document.getElementById('fetchBtn').addEventListener('click', async () => {
      const output = document.getElementById('asyncOutput');
      output.textContent = "Loading joke...";

      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) throw new Error("Network error");
        const joke = await response.json();
        output.textContent = `${joke.setup} — ${joke.punchline}`;
      } catch (err) {
        output.textContent = "Failed to fetch joke: " + err.message;
      }
    });
  </script>
</body>
</html>
