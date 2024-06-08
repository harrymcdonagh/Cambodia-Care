const express = require('express')
const router = express.Router()

router.get('/build', (req,res)=>{
    res.render('build/build')
})

module.exports = router