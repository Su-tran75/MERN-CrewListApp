const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
// Use express.json() to get data into json format
app.use(express.json());

// PORT
const PORT = process.env.PORT || 5500;

// Connect to Mongodb
mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err))



// Add Port and connect to server
app.listen(PORT, () => console.log("server connected"));