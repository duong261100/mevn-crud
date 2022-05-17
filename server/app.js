require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

// database connection
mongoose
    .connect('mongodb://localhost:27017/mevn-crud-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected!'))
    .catch(err => console.log(err))

// routes
app.use('/api/post', require('./routes/routes'))

// start server
app.listen(port, () => console.log(`server running at http://localhost:${port}`));

    