const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');
var Recaptcha = require('express-recaptcha').RecaptchaV3;
var recaptcha = new Recaptcha('SITE_KEY', 'SECRET_KEY');

const app = express();


app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})
app.use(express.static(__dirname + '/dist/saksham19'));
app.use('/api',registerRoute );
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/saksham19/index.html'));
  });


mongoose.connect('mongodb+srv://vinayak:Gv9yXEr5RamY9ydM@cluster0-ayowj.mongodb.net/saksham?retryWrites=true&w=majority')
.then(result => {
    app.listen(process.env.PORT || 8000);
})
.catch(err => {
    console.log(err);
})
