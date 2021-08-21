const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');
const flickrRouter = require('./routes/flickr');

dotenv.config()

const app = express();
const corsOrigin = process.env.CORS_ORIGINS!;
const corsOptions = {
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
