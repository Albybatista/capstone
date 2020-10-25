// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const scriven = express.Router();
const postgres = require('../postgres.js');
    
// =================
//  INDEX/GET ROUTE
// =================
scriven.get('/', (req, res) => {
    postgres.query('SELECT * FROM notes ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
        
    });
});

// ===================
//  CREATE/POST ROUTE
// ===================
scriven.post('/', (req, res) => {
    postgres.query(`INSERT INTO notes (dated, title, codeLanguage, codeBlock, comments) VALUES ('${req.body.dated}', '${req.body.title}', '${req.body.codeLanguage}', 
    '${req.body.codeBlock}', '${req.body.comments}'`, (err, results) => {
        postgres.query('SELECT * FROM notes ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

// ==============
//  DELETE ROUTE
// ==============
scriven.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM notes WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM notes ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

// ==================
//  UPDATE/PUT ROUTE
// ==================
scriven.put('/:id', (req, res) => {
    postgres.query(`UPDATE notes SET dated = '${req.body.dated}', title = '${req.body.title}', codeLanguage = '${req.body.codeLanguage}', codeBlock = '${req.body.codeBlock}', comments = '${req.body.comments}' WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM notes ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});


module.exports = scriven;