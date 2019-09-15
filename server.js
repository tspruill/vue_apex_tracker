const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

const app = express();
dotenv.config({path: './config.env'});

// Profile routes 
app.use('/api/v1/profile',require('./routes/profiles.js'))

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`App listening on port ${port}!`)
})