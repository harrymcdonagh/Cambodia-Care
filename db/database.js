const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config()

//DB connection
var config ={
    mysql_pool : mysql.createPool({
        host: process.env.HOST_NAME,
        user: process.env.USER_NAME,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}

config.mysql_pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL as id " + connection.threadId);
    connection.release();
});

module.exports = config;