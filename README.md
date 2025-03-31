# SIT323 4.1P - Building a Simple Calculator Microservice

This project is part of the SIT323/SIT737 Cloud Native Application Development course. I implemented a simple calculator microservice using Node.js and Express, which supports basic arithmetic operations and includes proper error handling.

## Repository

The code is hosted on GitHub:  
[https://github.com/yuwei-zhui/sit323-2025-prac4p](https://github.com/yuwei-zhui/sit323-2025-prac4p)

## Project Setup

### Step 1: Initialize Repository and Project
- Create and initialize the GitHub repository.
- Clone the repository locally.
- Initialize a new Node.js project:
  ```bash
  npm init -y
  ```
- Install Express:
  ```bash
  npm install express
  ```

### Step 2: Create the Application File
- Create an `index.js` file in your project directory.
- Import the Express framework and create an Express application instance:
  ```javascript
  const express = require('express');
  const app = express();

  app.use(express.json());
  ```
  
### Step 3: Design and Implement API Endpoints
Implement API endpoints for the following operations:
- **Addition:** `/add`
- **Subtraction:** `/subtract`
- **Multiplication:** `/multiply`
- **Division:** `/divide`

Each endpoint:
- Extracts numbers from the request (using query parameters).
- Performs the appropriate arithmetic operation.
- Handles errors such as invalid numbers or division by zero.
  
Example endpoint for addition:
```javascript
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ operation: "addition", num1, num2, result });
});
```

### Step 4: Testing with Postman
- Run the project using:
  ```bash
  node index.js
  ```
- Use Postman to test each API endpoint:
  - **Addition:** `http://localhost:3323/add?num1=10&num2=5`
  - **Subtraction:** `http://localhost:3323/subtract?num1=10&num2=5`
  - **Multiplication:** `http://localhost:3323/multiply?num1=10&num2=5`
  - **Division:** `http://localhost:3323/divide?num1=10&num2=5`
- Also test error handling (invalid numbers like 'a', or division by 0).

### Step 5: Commit and Upload Code
- Commit your changes:
  ```bash
  git add .
  git commit -m "Initial commit: Implemented calculator microservice"
  ```
- Push the code to the GitHub repository:
  ```bash
  git push origin main
  ```

## Usage

1. **Start the Server:**  
   Run `node index.js` to start the microservice.

2. **Test the API:**  
   Use your web browser or Postman to interact with the API endpoints as described above.

## Conclusion

This microservice demonstrates the basic principles of cloud native development by implementing a modular, RESTful API for arithmetic operations. The project follows best practices with error handling and clear separation of functionality.  
