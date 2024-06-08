const express = require('express')
const router = express.Router()

router.get('/teach', (req,res)=>{
    res.render('teach/teach')
})

module.exports = router