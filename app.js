const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register')

const app = express();


app.use(bodyParser.json());
app.use('/api',registerRoute );


mongoose.connect('mongodb+srv://vinayak:Gv9yXEr5RamY9ydM@cluster0-ayowj.mongodb.net/saksham?retryWrites=true&w=majority')
.then(result => {
    app.listen(8000);
})
.catch(err => {
    console.log(err);
})
