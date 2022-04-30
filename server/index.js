const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
// Use express.json() to get data into json format
app.use(express.json());

// PORT
// const PORT = process.env.PORT || 8081;
const PORT = 8080;

// use cors
app.use(cors());

// Import routes
const CrewMemberRoute = require('./routes/crewMember');

// Connect to Mongodb
mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err))

app.use('/', CrewMemberRoute);

// Add Port and connect to server
app.listen(PORT, () => console.log("server connected"));