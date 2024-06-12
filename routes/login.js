/* LOGIN.JS
    Interacts with server.js to load the page
    Interacts with the database to allow a user to log in
*/
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
    const email = req.body.email;
    const password = req.body.password;
    const promise = new Promise(function(resolve){
        lr_func.login(email, password, function(callback) {
            resolve(callback);
        });
    });
    promise.then((value) => {
        if (value[0] == true) {
            req.session.logged = true;
            req.session.email = value[2];
            req.session.userid = value[1];
            req.session.isadmin = value[3];
            const returnTo = req.session.returnTo || '/'
            delete req.session.returnTo
            res.redirect(returnTo)
        }
        else res.redirect('login') 
      });
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        console.log('logout successful')
        res.redirect('/');
    });
});

module.exports =  router