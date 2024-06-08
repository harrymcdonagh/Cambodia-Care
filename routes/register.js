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

module.exports = router