const express = require('express')
const router = express.Router()

router.get('/food', (req,res)=>{
    res.render('food')
})

module.exports = router