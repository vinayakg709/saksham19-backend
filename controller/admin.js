const Admin = require('../model/admin');
const jwt = require('jsonwebtoken');

exports.admin = (req,res,next)=> {
    const admin = req.body.admin;
    const password = req.body.password;

    Admin.findOne({admin:admin,password:password})
    .then(isAdmin => {
    if(!isAdmin){
        const error = new Error('no such admin');
        error.statusCode =401;
        throw error;
    }
    const token = jwt.sign(
        {
            admin: isAdmin.admin,
            adminId : isAdmin._id.toString()
        }, 
        'secret',
        {expiresIn: '1h'}
    );
        res.status(200).json({message: 'loggedin',token: token, adminId: isAdmin._id.toString()});
        console.log('loggedin broo');
    })
    .catch(err => {
        console.log(err)
    })
    
}