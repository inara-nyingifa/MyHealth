//import express object
const express = require("express");
// run express to create myHealth app
const app = express();
//import cookieParser middleware     - this will save our cpokies
const cookiePaser = require("cookie-parser");
//import expressSession object - this lets the server know who its talking to
const session = require("express-session");
//import morgan middleware - this helps collects logs from our server
const morgan = require("morgan");

const user = require("./models/user");
const hbs = require("express-handlebars");
// import bodyParser middleware - this parses income request
const bodyParser = require("body-parser");
const path = require("path");

// set up default port
app.set('port',3001);
// im not sure if it should be writtn this way > const port = process.env.PORT || 3001;
app.use(morgan('dev'));
//will allow us to send post requests across pages
app.use(bodyParser.urlencoded9({extended: true}));
// allows us to store cookies in browser
app.use(cookieParser());
//session info
app.use(session({
    key: 'user_sid',
    secret: 'somesecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000
    }
}));

//hbs
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutDir: _dirname + 'views/layout'}));
app.set('view engine', 'hbs');

 .