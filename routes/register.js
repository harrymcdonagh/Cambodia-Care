/* REGISTER.JS
    Interacts with server.js to load the page
    Interacts with the HTML to get data that loads into database
*/

const express = require('express')
const fs = require('fs');
const path = require('path');
const lr_func = require('../models/lr-forms')
const router = express.Router()

router.get('/register', (req,res)=>{
    res.render('register/register',{
        layout: 'layouts/form-layout',
        formContent: fs.readFileSync(path.resolve(__dirname, '..', 'views', 'partials', 'register-form.ejs'))
    })
})

router.post('/register-confirm', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    lr_func.register(email, name, password);
    res.redirect('/login');
});

module.exports = router