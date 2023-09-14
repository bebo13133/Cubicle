const express = require('express');
const app = express();
const { log } = require('console')

//const config = require('./config/config');//
require('./config/express')(app);
require('./config/routes')(app)




//routes 
