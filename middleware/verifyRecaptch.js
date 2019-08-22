const request = require('request');

module.exports = {
    verifyCaptcha: (req, res, next) => {
        
        var requestQuery = req.body;
        if( requestQuery != undefined && requestQuery != '' && requestQuery != null && requestQuery.response != undefined && requestQuery.response != '' && requestQuery.response != null ){
            var response = requestQuery.response;
                var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=6Lc_erMUAAAAADQFt3XbiHoI0xOtjCTladWqZtyF&response=" +response;
                // Hitting GET request to the URL, Google will respond with success or error scenario.
                request(verificationUrl,function(error,response,body) {
                    console.log(response, body);
                body = JSON.parse(body);
                console.log(body);
                // Success will be true or false depending upon captcha validation.
                    if(body.success !== undefined && !body.success) {
                        res.send({"responseCode" : 1,"responseDesc" : "trynna hack bitch, well guess what u cant you sadistic dumbass bitch"});
                    }else{
                        next();
                    }
                });
        }else{
            res.send({"responseCode" : 1,"responseDesc" : "Failed captcha verification *"});
        }
    }
}