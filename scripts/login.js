module.exports = exports = function(email, password, callback) {
    var query = "SELECT * FROM user_tb WHERE email LIKE '"+email+"' AND password LIKE '"+password+"'";
    connection.query(query, function (log){            
        if (log.length > 0) {
            let callback = [];
            callback[0] = true;
            callback[1] = log[0].email;
            callback[2] = log[0].IsAdmin;
            callback(callback);
        }
        else {
            let callback = [];
            callback[0] = false;
            callback(callback);
        }
    })
}

var mysql = require('mysql2');
var connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "synopticProject",
database: "main_db"
});
connection.connect(function(err) {
if (err){
    console.log("login.js not connected - error");
    throw err;
} 
console.log("login.js connected");
});