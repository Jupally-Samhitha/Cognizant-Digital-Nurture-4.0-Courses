<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JavaScript Basics & Setup</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; max-width: 700px; }
    button { padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; }
    #message, #dataTypesOutput, #operatorsOutput { margin-top: 1rem; padding: 1rem; border: 1px solid #ccc; background: #f9f9f9; border-radius: 5px; }
    h2 { margin-top: 2rem; }
    pre { background: #eee; padding: 0.5rem; border-radius: 3px; }
  </style>
</head>
<body>

  <h1>JavaScript Basics & Setup Demo</h1>

  <p>This demo shows variables, functions, event handling, console logging, syntax, data types, and operators.</p>

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

    // Show greeting on page load in console and alert
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
        a = ${a}, b = ${b}<br>
        Addition (a + b): ${a + b}<br>
        Subtraction (a - b): ${a - b}<br>
        Multiplication (a * b): ${a * b}<br>
        Division (a / b): ${a / b}<br>
        Modulus (a % b): ${a % b}<br>
        Exponentiation (a ** b): ${a ** b}<br>
        Increment (a++): ${a + 1}<br>
        Decrement (b--): ${b - 1}<br>
        Equality (a == b): ${a == b}<br>
        Strict Equality (a === b): ${a === b}<br>
      `;
      document.getElementById('operatorsOutput').innerHTML = operatorsText;
    };

    // Add event listener to button
    document.getElementById('clickBtn').addEventListener('click', handleClick);
  </script>

</body>
</html>
