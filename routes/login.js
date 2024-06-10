const express = require('express')
const fs = require('fs');
const path = require('path');
const lr_func = require('../models/lr-forms')
const router = express.Router()

router.get('/login', (req,res)=>{
    res.render('login/login',{
        layout: 'layouts/form-layout',
        formContent: fs.readFileSync(path.resolve(__dirname, '..', 'views', 'partials', 'login-form.ejs'))
    })
})

router.post('/login-confirm', (req, res) => {
    const email = req.body.Email;
    const password = req.body.password;
    const promise = new Promise(function(resolve){
        lr_func.login(email, password, function(callback) {
            resolve(callback);
        });
    });
    promise.then((value) => {
        if (value[0] == true) {
            req.session.logged = true;
            req.session.email = email;
            req.session.userid = value[1];
            req.session.isadmin = value[2];
            res.redirect('/');
        }
        else res.redirect('login'); 
      });
});

module.exports =  router