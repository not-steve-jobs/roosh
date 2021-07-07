require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/routes')
const passport = require('passport')
const session = require('express-session');

const path = require('path')
const PORT = process.env.PORT || 3000

const app = express()
require('./auth/passport')(passport);

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// app.set('views', './views/')
app.set('views', path.join(__dirname, '/views/'))
app.set('view engine', 'ejs')

app.use(express.static("./public"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use('/static', express.static('public'))

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Connected to database');
})

app.use('/', apiRoutes)


process.on('uncaughtException', function (err) {
    console.error(`Oops Unhandled Exception !!!!! = ${err.stack}`);
})


app.listen(PORT, () => {
    console.log('Server started...')
})