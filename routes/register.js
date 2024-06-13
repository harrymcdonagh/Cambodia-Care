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
    if (req.body.name && req.body.email && req.body.password) {
        res.sendStatus(201);
        console.log("test1");
        //res.status(201).json('All fields passed');
        res.redirect('/login');
        console.log("test2");
        return;
      }
    res.redirect('/login');

});

module.exports = router