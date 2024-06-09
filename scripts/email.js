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

// app.get('/register-confirm', (req, res) => {
//     const name = req.query.name;
//     const email = req.query.email;
//     const password = req.query.password;
//     Register(email,name,password);
//     res.redirect('/login')
// });

// app.get('/login-confirm', (req, res) => {
//     const email = req.query.email;
//     const password = req.query.password;
//     const promise = new Promise(function(resolve){
//         Login(email,password, function(callback) {
//             resolve(callback);
//         });
//     });
//     promise.then((value) => {
//         if (value[0] == true) {
//             req.session.logged = true;
//             req.session.email = email;
//             // req.session.name = name;
//             req.session.userid = value[1];
//             req.session.isadmin = value[2];
//             res.redirect('/index');
//         }
//         else res.redirect('/login'); 
//       });
// });
