const express = require('express');
const app = express();
const postgres = require('./postgres.js');

app.use(express.json());
app.use(express.static('public'))

const notesController = require('./controllers/notes.js');
app.use('/notes', notesController);

postgres.connect();

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port...');
})

