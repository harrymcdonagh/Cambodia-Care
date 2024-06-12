/* EMAIL.JS
    USED TO SEND EMAILS TO USERS
*/

var nodemailer = require('nodemailer');

var emailService = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'cambodiacare.pungaol@gmail.com',
        pass: 'wecarebecausewecare' 
    }
});

var testEmail = {
    from: 'cambodiacare.pungaol@gmail.com',
    to: 'bpstannard@gmail.com',
    subject: 'Test Email',
    text: 'TEST SUCCESSFUL!'
};

emailService.sendMail(testEmail, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});