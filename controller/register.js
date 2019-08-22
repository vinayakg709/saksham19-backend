const Register = require('../model/register');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
const mongo = require('mongodb');

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
    const branch = req.body.branch;
    const year = req.body.year;
    const gender = req.body.gender;
    const hosteler = req.body.hosteler;
    const sports = req.body.sports;

   

    const register = new Register({
        name: name,
        studentno : studentno,
        contactno:contactno,
        email:email,
        branch: branch,
        year:year,
        gender:gender,
        hosteler:hosteler,
        sports:sports
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

exports.deleteDelete = (req,res,next)=>{
    const id = req.body.pi;
    console.log(id);
    Register.findByIdAndRemove(id)
    .then(
        result => {
            res.json({message: 'deleted'});
            console.log('deleted')
        }
    ).catch(err => {
        console.log(err);
    })

}


