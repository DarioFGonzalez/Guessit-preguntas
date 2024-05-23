const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');

const mainRouter = require('./Routes/mainRouter.js');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(mainRouter);

module.exports = server;