const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');



const database = require('./config/database');
const config = require('./config/config');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser());
app.use(cors());

database(config.connectionString);

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname)));
const user = require('./routes/user');
app.use('/user', user);

module.exports = app;