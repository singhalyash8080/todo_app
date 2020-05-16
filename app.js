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
app.use('/item', require('./routes/item'))
app.use('/user',require('./routes/user'))

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    console.log(error.message);
    res.json({
        error:{
            message: error.message
        }
    });
});


module.exports = app
