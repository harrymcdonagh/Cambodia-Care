const express = require('express')
const session = require('express-session');
const app = express()
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv')

//Routes
const indexRouter = require('./routes/home')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const buildRouter = require('./routes/build')
const bookingRouter = require('./routes/booking')
const teachRouter = require('./routes/teach')
const foodRouter = require('./routes/food')
const accountRouter = require('./routes/account')
const aboutRouter = require('./routes/about')

dotenv.config()

//Set views and layout paths
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000/');
});

app.use('/', indexRouter)
app.use('/', registerRouter)
app.use('/', loginRouter)
app.use('/', buildRouter)
app.use('/', bookingRouter)
app.use('/', teachRouter)
app.use('/', foodRouter)
app.use('/', accountRouter)
app.use('/', aboutRouter)