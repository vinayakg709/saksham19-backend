const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register')

const app = express();


app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use('/api',registerRoute );


mongoose.connect('mongodb+srv://vinayak:Gv9yXEr5RamY9ydM@cluster0-ayowj.mongodb.net/saksham?retryWrites=true&w=majority')
.then(result => {
    app.listen(8000);
})
.catch(err => {
    console.log(err);
})
