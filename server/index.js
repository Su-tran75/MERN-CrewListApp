const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
// Use express.json() to get data into json format
app.use(express.json());

// PORT
const PORT = process.env.PORT || 5500;



// Add Port and connect to server
app.listen(PORT, () => console.log("server connected"));