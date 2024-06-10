var db = require('../db/database').mysql_pool


function login(email, password, callback){
    var query = "SELECT * FROM user_tb WHERE email LIKE '"+email+"' AND password LIKE '"+password+"'";
    db.getConnection(function (err, connection){
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
                callback(callbackData);
                connection.release();
            }
            else {
                let callbackData = [];
                callbackData[0] = false;
                callback(callbackData);
                connection.release();
            }
        })
    })
}

function register(email, name, password) {
    var query = "INSERT INTO users (email,name,password,isAdmin) VALUES ('"+ email +"','"+ name +"','"+ password +"', 0)";
    db.getConnection(function (err, connection){
        db.query(query, function (err){            
            if (err){
                if(err.errno==1062) {
                    console.log("Account would be a duplicate");
                }
            }
        })
        connection.release()
    })
} 

module.exports = {
    login,
    register
};