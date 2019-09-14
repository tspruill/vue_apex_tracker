const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();
dotenv.config({path: './config.env'});

// Profile routes 
app.use('/api/v1/profile',require('./routes/profiles.js'))
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`App listening on port ${port}!`)
})