/* BOOKINGS.JS
        Interacts with database to handle bookings
        Creates Bookings
        Deletes Bookings
*/

var db = require('../db/database').mysql_pool

function book(type, startDate, endDate, userID, callback){
    var query = "INSERT INTO bookings_tb (dateIN, dateOUT, type, userID) VALUES (?, ?, ?, ?)"
    if(userID!=null){
        db.getConnection(function(err, connection){
            if(err){
                console.error("Error getting database connection:", err)
                callback(err);
                return
            }
            connection.query(query, [startDate, endDate, type, userID], function(err, result){
                connection.release()
                if(err){
                    console.error("Error running insert booking query:")
                    return
                }
                console.log("Booking inserted successfully:");
                callback(null, result);
            })
        })
    }
}

module.exports = {
    book
}