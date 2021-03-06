const mongoose = require('mongoose');

//Database connection establish
mongoose.connect('mongodb://localhost:27017/my-db'),
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        return !err 
            ? console.log('Mongodb connected successfully')
            : console.log('Error in Mongodb Connection');
    }
