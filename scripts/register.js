module.exports = exports = function(email, name, password) {
    var query = "INSERT INTO users (email,name,password,isAdmin) VALUES ('"+ email +"','"+ name +"','"+ password +"', 0)";
    connection.query(query, function (err){            
        if (err){
            if(err.errno==1062) {
                console.log("Account would be a duplicate");
            }
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
    console.log("register.js not connected - error");
    throw err;
} 
console.log("register.js connected");
});