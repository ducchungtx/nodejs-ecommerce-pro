const express = require('express');
const morgan = require('morgan');
const helmet = require("helmet");
const compression = require('compression');
const app = express();

// init midlware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require('./dbs/init.mongodb');

// init routes
app.get('/', (req, res, next) => {
  return res.status(200).send({
    message: "Welcome to WSE eCommerce",
  });
})

// handle errors

module.exports = app;
