const express = require('express');
const app = express();

app.use(express.json());

// addition
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid number!" });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ operation: "addition", num1, num2, result });
});

// subtraction,
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid number!" });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ operation: "subtraction", num1, num2, result });
});

// multiplication
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid number!" });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ operation: "multiplication", num1, num2, result });
});

// division
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid number!" });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: "The divisor cannot be 0!" });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ operation: "division", num1, num2, result });
});

const PORT = 3323;
app.listen(PORT, () => {
    console.log(`hi port${PORT}`);
});
