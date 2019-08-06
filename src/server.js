const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();
const port = process.env.port || 3333;

mongoose.connect('mongodb+srv://tindev:XROSazcbqR0hb3iv@cluster0-whyx0.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => {
    console.log('Server running on port ' + port);
});
