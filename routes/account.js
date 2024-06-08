const express = require('express')
const router = express.Router()
const account = require('../models/accounts')

router.get('/account', async (req,res)=>{
    try{
        const userID = 123;
        const userAccount = await account.getUserAccount(123);

        res.render('account/account', userAccount);
    }catch(error){
        console.error('Error fetching user account data:', error)
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router