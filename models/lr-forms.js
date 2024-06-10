var db = require('../db/database').mysql_pool


function login(email, password, callback){
    var query = "SELECT * FROM user_tb WHERE email LIKE '"+email+"' AND password LIKE '"+password+"'";
    db.getConnection(function (err, connection){
        if (err) {
            console.error("Error getting database connection:", err);
            return;
        }
        db.query(query, function(err, log){
            if (err) {
                connection.release();
                callback(err);
                return;
            }
            if (log.length > 0) {
                let callbackData = [];
                callbackData[0] = true;
                callbackData[1] = log[0].email;
                callbackData[2] = log[0].IsAdmin;
                console.log("login successful")
                callback(callbackData);
                connection.release();
            }
            else {
                let callbackData = [];
                callbackData[0] = false;
                console.log("login failed")
                callback(callbackData);
                connection.release();
            }
        })
    })
}

function register(email, name, password) {
    console.log(email, name, password);
    var query = "INSERT INTO user_tb (email, name, password, isAdmin) VALUES (?, ?, ?, 0)";
    
    db.getConnection(function (err, connection) {
        if (err) {
            console.error("Error getting database connection:", err)
            return
        }
        connection.query(query, [email, name, password], function (err, results) {
            connection.release();
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    console.log("Account would be a duplicate")
                } else {
                    console.error("Error executing query:", err)
                }
            } else {
                console.log("User registered successfully");
            }
        })
    })
}

module.exports = {
    login,
    register
};