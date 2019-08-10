const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    if (typeof req.headers.authorization !== 'string') {
        res.sendStatus(400);
        return;
      }
    
      var tokens = req.headers.authorization.split(' ');
    
      if (tokens.length < 2) {
        res.sendStatus(400);
        return;
      }

      var token = tokens[1];


    // const token =req.headers.authorization.split(' ')[1]; 
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