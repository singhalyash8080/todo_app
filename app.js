const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const compression = require('compression')
const morgan = require('./logging/morgan')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv/config');

mongoose.connect('mongodb+srv://yash_8080:'+ process.env.MONGO_ATLAS_PW +'@todo-app-ihecy.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true , useNewUrlParser: true });

// Middlewares
app.use(express.json())
app.use(compression())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Logging

app.use(morgan)

// Define routes
app.use('/', require('./routes'))

module.exports = app
