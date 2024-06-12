/* BOOKING.JS
        Interacts with server.js to load account page
        Makes sure user is logged in as info is needed to be displayed on this page
*/
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