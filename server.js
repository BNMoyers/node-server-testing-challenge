//imports and dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const usersRouter = require('../users/users-router');

//server
const server = express();

//middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

//routes
// server.use('./api/users', usersRouter)



//test
server.get('/', (req, res) => {
    res.send('server is up')
})

//exports
module.exports = server;