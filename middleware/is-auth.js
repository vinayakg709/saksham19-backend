const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, 'secret');
    }catch(err){
        err.statuscode = 500;
        throw err;
    }
    if(!decodedToken){
        const error = new Error('not authenticaed');
        error.statuscode = 401;
        throw error;
    }
    req.adminId = decodedToken.adminId;
    next();

}