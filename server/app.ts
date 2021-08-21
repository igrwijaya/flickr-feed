var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var flickrRouter = require('./routes/flickr');

dotenv.config()

var app = express();
var corsOrigin = process.env.CORS_ORIGINS!;
var corsOptions = {
    origin: corsOrigin.split(',')
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions))

app.use('/', indexRouter);
app.use('/flickr', flickrRouter);

module.exports = app;
