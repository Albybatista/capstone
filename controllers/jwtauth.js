
const express = require('express');
const scriven = express.Router();
const bcrypt = require('bcrypt');
const client = require('pg');
const jwtGenerator = require('../utils/jwtgenerator')
const authorize = require('../controllers/notes')
const validInfo = require('../controllers/authorize')


const { Client } = require("pg");

// AUTHORIZATION
scriven.post('/register', validInfo, async (req, res) => {
    const { username, password} = req.body;
    try {
        const user = await client.query("SELECT * FROM users WHERE user_username = $1", [
        ]);
        
        if (user.rows.length > 0) {
            return res.status(401).json("User already exists!");
        }
    
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await client.query(
        "INSERT INTO users (username, user_password) VALUES ($1, $2) RETURNING *",
        [name, bcryptPassword]
    );
    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

scriven.post('/login', validInfo, async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await client.query("SELECT * FROM users WHERE username = $1", [text
        ]);
        
        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }
        const validPassword = await bcrypt.compare(
        password,
        user.rows[0].user_password
        );
        if (!validPassword) {
            return res.status(401).json("Invalid Credential");
        }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json([ jwtToken ]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

scriven.post('/verify', authorize, (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
    
});
