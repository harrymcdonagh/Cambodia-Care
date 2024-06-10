const express = require('express')
const router = express.Router()
const account = require('../models/accounts')

router.get('/account', async (req,res)=>{
    try{
        const userid = req.session.userid;
        const userAccount = await account.getUserAccount(userid)
        const userBookings = await account.getUserBookings(userid)

        res.render('account/account', {userAccount: userAccount, userBookings: userBookings});
    }catch(error){
        console.error('Error fetching user account data:', error)
        res.status(500).send('Internal Server Error');
    }
})
module.exports = router