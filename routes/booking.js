const express = require('express')
const router = express.Router()

router.get('/booking', (req,res)=>{
    res.render('booking')
})

module.exports = router