const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.get('/login', (req,res)=>{
    res.render('login/login',{
        layout: 'layouts/form-layout',
        formContent: fs.readFileSync(path.resolve(__dirname, '..', 'views', 'partials', 'login-form.ejs'))
    })
})

module.exports = router