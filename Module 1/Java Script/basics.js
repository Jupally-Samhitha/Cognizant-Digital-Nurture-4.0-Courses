<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JavaScript Basics & Setup</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    button { padding: 0.5rem 1rem; font-size: 1rem; }
    #message { margin-top: 1rem; color: green; font-weight: bold; }
  </style>
</head>
<body>

  <h1>JavaScript Basics & Setup Demo</h1>

  <p>This demo shows variables, functions, event handling, and console logging.</p>

  <button id="clickBtn">Click Me</button>
  <p id="message"></p>

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
    };

    // Add event listener to button
    document.getElementById('clickBtn').addEventListener('click', handleClick);
  </script>

</body>
</html>
