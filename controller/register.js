const Register = require('../model/register')

exports.register = (req,res,next) => {
    const name = req.body.name;
    const studentno = req.body.studentno;

    const register = new Register({
        name: name,
        studentno : studentno
    }).save()
    .then(result => {
        res.status(201).json({message: 'registered', registerId: result._id});
        console.log('registered')
    })
    .catch(err => {
        console.log(err);
    })
}