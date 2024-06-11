const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middleware/auth');
const newBooking = require('../models/bookings');
var nodemailer = require('nodemailer');

var emailService = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'cambodiacare.pungaol@gmail.com',
        pass: 'piqn iypw ygld mbxv' 
    }
});

router.get('/booking', ensureAuthenticated, (req,res)=>{
    const source = req.query.source
    res.render('booking/booking', {source})
})

router.get('/booking-confirm', (req, res) =>{
    const userEmail = req.session.email;
    const bookingDetails = req.session.bookingDetails;
    let typeText;
    if (bookingDetails.type === '0') {
        typeText = 'Teaching';
    } else {
        typeText = 'Building';
    }
    res.render('booking/booking-confirm', {
        userEmail: userEmail, 
        type: typeText,
        startDate: bookingDetails.startDate,
        endDate: bookingDetails.endDate
    })
})

router.post('/make-booking', (req, res) =>{
    const type = req.body.type;
    const startDate = req.body['start-date'];
    const endDate = req.body['end-date'];
    const userID = res.locals.userID;
    const email = res.locals.email;
    newBooking.book(type, startDate, endDate, userID, (err, result) => {
        if(err) {
            console.error("Error making booking:", err);
            res.status(500).send("Error making booking");
        } else {
            req.session.bookingDetails = { type: type, startDate: startDate, endDate: endDate };
            var confirmationEmail = {
                from: 'cambodiacare.pungaol@gmail.com',
                to: email,
                subject: 'Confirmation of your booking with Cambodia Care',
                text: 'Your booking from '+ startDate + ' to ' + endDate + ' was successful!'
            };
            emailService.sendMail(confirmationEmail, function(error){
                if (error) {
                  console.log(error);
                } else {
                  console.log("Confirmation Email Sent");
                }
            });
            res.redirect('/booking-confirm')
        }
    });
})

module.exports = router