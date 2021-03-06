const express = require('express');
const app = express();
const morgen = require('morgan');
const mongoose = require('./_mongoose/mongoose');

//const mongoose = require('mongoose');
app.use(morgen('dev'));
const port = 5000;
app.use(express.json());


const infoRouter = require('./_router/router');
app.use('/user', infoRouter);

app.listen(port, () => {
    console.log('Server connected ------- ');
});

//Database connection establish
mongoose.connect('mongodb://localhost:27017/my-db'),
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        return !err 
            ? console.log('Mongodb connected successfully')
            : console.log('Error in Mongodb Connection');
    }

