const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const indexRoute = require('../routes/index');
const categoryRoute = require('../routes/category-route');
const taskRoute = require('../routes/task-route');

module.exports = (app) => {
    app.use(cors());
    app.use(helmet());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser(process.env.SECRET_COOKIE));
    app.use(express.static(path.join(__dirname, 'public')));

    // Routing
    app.use('/', indexRoute);
    app.use('/', categoryRoute);
    app.use('/', taskRoute);

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        next(createError(404));
    });

    // error handler
    app.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(err.status || 500).json({ message: err.message });
    });
};