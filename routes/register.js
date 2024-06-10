const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.get('/register', (req,res)=>{
    res.render('register/register',{
        layout: 'layouts/form-layout',
        formContent: fs.readFileSync(path.resolve(__dirname, '..', 'views', 'partials', 'register-form.ejs'))
    })
})

router.post('/register-confirm', (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;
    Register(email, name, password);
    res.redirect('/login');
});

module.exports = router