const express = require('express');
require('dotenv').config()
var cors = require('cors');
const connectDB = require('./config/db');
// routes
const books = require('./routes/api/books');



const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// cors
app.use(cors({ origin: true, credentials: true }));

// use Routes
app.use('/api/books', books);
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));