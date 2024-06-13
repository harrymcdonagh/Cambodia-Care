const db = require('../db/database').mysql_pool;

function getUserAccount(userid) {
    return new Promise((resolve, reject) => {
        const query =  "SELECT * FROM user_tb WHERE userID ='"+userid+"'"; 
        db.getConnection((err, connection) => {
            if(err){
                reject(err)
                return
            }
            connection.query(query, [userid], (err, results) => {
                connection.release()
                if(err){
                    reject(err)
                    return
                }
                if (results.length === 0) {
                    reject(new Error("User with id = "+userid+" not found"))
                    return;
                }
                const user = results[0]
                resolve(user)
            })
        })
    })
}

function getUserBookings(userid){
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM bookings_tb WHERE userID = '"+userid+"'";
        db.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(query, [userid], (err, results) => {
                connection.release();
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    });
}

module.exports = {
    getUserAccount,
    getUserBookings
};