const Register = require('../model/register');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

const transporter = nodemailer.createTransport(mailgunTransport({
    auth:{
        api_key : '16fecd3a116c06fd33c97ed9d6b99223-afab6073-c3adf26a',
        domain: 'sandbox6f275097c52945a8a54564c06adde322.mailgun.org'
    }
}));

exports.register = (req,res,next) => {
    const name = req.body.name;
    const studentno = req.body.studentno;
    const contactno = req.body.contactno;
    const email = req.body.email;

    var option = {
        to: "vinayakg709@gmail.com",
        from: "vinayakg709@gmail.com",
        subject: 'registered',
        html: "<h1> you are registered </h1>"
    };

    const register = new Register({
        name: name,
        studentno : studentno,
        contactno:contactno,
        email:email
    }).save()
    .then(result => {
        res.status(201).json({message: 'registered', registerId: result._id, name: name});
        transporter.sendMail(option, function(err,info){
            if(err){
                console.log(err)
            }
            else{
                console.log('sent')
            }
        })
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getRegister = (req,res,next) => {
    Register.find()
    .then(users => {
        // res.send(JSON.stringify(users));
        res.json(users);
    })
    .catch(err => {
        console.log(err);
    })
}

