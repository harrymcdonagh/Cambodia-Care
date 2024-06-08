const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv')
const mysql = require('mysql2')
const path = require('path')

//Routes
const indexRouter = require('./routes/index')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const buildRouter = require('./routes/build')
const teachRouter = require('./routes/teach')
const foodRouter = require('./routes/food')

dotenv.config()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.json())

const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connection.connect(function(err) { 
    if(err) throw err;
    console.log("Connected to mysql")
})

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000/');
});

app.use('/', indexRouter)
app.use('/', registerRouter)
app.use('/', loginRouter)
app.use('/', buildRouter)
app.use('/', teachRouter)
app.use('/', foodRouter)