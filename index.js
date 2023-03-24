const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

// Middleware to parse JSON body
app.use(bodyParser.json());

// GET route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// POST routes
app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  // Check for invalid data types
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.json({
      status: "error",
      message: "Invalid data types",
      sum: null,
    });
    return;
  }
  // Check for underflow
  if (num1 < -1000000 || num2 < -1000000 || num1 + num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
      sum: null,
    });
    return;
  }
  // Check for overflow
  if (num1 > 1000000 || num2 > 1000000 || num1 + num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
      sum: null,
    });
    return;
  }
  // Calculate sum
  const sum = num1 + num2;
  res.json({
    status: "success",
    message: "The sum of given two numbers",
    "sum": sum,
  });
});

app.post("/sub", (req, res) => {
  const { num1, num2 } = req.body;
  // Check for invalid data types
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.json({
      status: "error",
      message: "Invalid data types",
      difference: null,
    });
    return;
  }
  // Check for underflow
  if (num1 < -1000000 || num2 < -1000000 || num1 - num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
      difference: null,
    });
    return;
  }
  // Check for overflow
  if (num1 > 1000000 || num2 > 1000000 || num1 - num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
      difference: null,
    });
    return;
  }
  // Calculate difference
  const difference = num1 - num2;
  res.json({
    status: "success",
    message: "The difference of given two numbers",
    difference,
  });
});

app.post("/multiply", (req, res) => {
  const { num1, num2 } = req.body;
  // Check for invalid data types
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.json({
      status: "error",
      message: "Invalid data types",
      result: null,
    });
    return;
  }
  // Check for underflow
  if (num1 < -1000000 || num2 < -1000000 || num1 * num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
      result: null,
    });
    return;
  }
  // Check for overflow
  if (num1 > 1000000 || num2 > 1000000 || num1 * num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
      result: null,
    });
    return;
  }
  // Calculate product
  const result = num1 * num2;
  res.json({
    status: "success",
    message: "The product of given numbers",
    result,
  });
});

app.post("/divide", (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
      res.json({
        status: "error",
        message: "Cannot divide by zero",
        result: null,
    });
  // Check for invalid data types
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    res.json({
      status: "error",
      message: "Invalid data types",
      result: null,
    });
    return;
  }
  // Check for underflow
  if (num1 < -1000000 || num2 < -1000000 || num1 / num2 < -1000000) {
    res.json({
      status: "error",
      message: "Underflow",
      result: null,
    });
    return;
  }
  // Check for overflow
  if (num1 > 1000000 || num2 > 1000000 || num1 / num2 > 1000000) {
    res.json({
      status: "error",
      message: "Overflow",
      result: null,
    });
    return;
  }
  // Check for division by zero
    return;
  }
  // Calculate division
  const result = num1 / num2;
  res.json({
    status: "success",
    message: "The division of given numbers",
    result,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});
