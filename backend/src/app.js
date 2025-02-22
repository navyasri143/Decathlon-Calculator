const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/scorecalculator');
const cors=require('cors');
const app = express();
app.use(cors());
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb+srv://navyasrireddy:123abc@cluster0.ouq5o.mongodb.net/decalthon_scores" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', routes);

module.exports = app;