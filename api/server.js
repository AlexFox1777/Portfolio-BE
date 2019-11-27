const express = require('express');
const server = express();
//middleware
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
//routers
const email = require('../routers/emailRouter');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use('/email', email);

module.exports = server;



