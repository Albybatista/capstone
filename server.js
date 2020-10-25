// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const postgres = require('./postgres.js');
const notesController = require('./controllers/notes.js');
const cors = require('cors');

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.json());
app.use(express.static('public'))
app.use('/', notesController);
app.use(cors());


postgres.connect();


// =======================================
//              LISTENER
// =======================================
// app.listen(process.env.PORT || 3100, () => {
//     console.log('listening on port...');
// })

// app.listen(3100, () => {
//     console.log('listening on port... ');
// });

// app.listen(54321, () => {
//     console.log('listening on port... ');
// });
