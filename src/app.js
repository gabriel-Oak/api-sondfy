const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const database = require('./config/database');
const config = require('./config/config');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser());

database(config.connectionString);

const user = require('./routes/user');
app.use('/user', user);

module.exports = app;