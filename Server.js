const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'bookhub'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// API to insert book
app.post('/addBook', (req, res) => {
    const { title, author, category, image } = req.body;
    const sql = "INSERT INTO books (title, author, category, image) VALUES (?, ?, ?, ?)";
    db.query(sql, [title, author, category, image], (err, result) => {
        if (err) throw err;
        res.send('Book added successfully');
    });
});

// API to fetch books
app.get('/getBooks', (req, res) => {
    const sql = "SELECT * FROM books";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
