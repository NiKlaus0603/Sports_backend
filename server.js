const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());  // To parse JSON bodies

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Batman@123',
    database: 'web'
});

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Sports Management API!');
});

// Get all sports
app.get('/api/sports', (req, res) => {
    db.query('SELECT * FROM Sports', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json(results);
    });
});

// Get all rules
app.get('/api/rules', (req, res) => {
    db.query('SELECT * FROM Rules', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json(results);
    });
});

// Get matches
app.get('/api/matches', (req, res) => {
    db.query('SELECT * FROM Matches', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json(results);
    });
});

// Get merchandise
app.get('/api/merchandise', (req, res) => {
    db.query('SELECT * FROM Merchandise', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json(results);
    });
});

// Get teams
app.get('/api/teams', (req, res) => {
    db.query('SELECT * FROM Teams', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json(results);
    });
});

// Get players
app.get('/api/players', (req, res) => {
    db.query('SELECT * FROM Players', (err, results) => {
        if (err) {
            return res.status(500).send('Database query failed');
        }
        res.json(results);
    });
});

// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
