import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import router from './router';
import dbConfig from './config/database';

// Initialize http server
const app = express();

// Connecting to the database
const connectOpt = { useNewUrlParser: true };
mongoose.connect(dbConfig.url, connectOpt).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
  error => error,
);

// Logger that outputs all requests into the console
app.use(morgan('combined'));

// parse application/json
app.use(bodyParser.json());

// set json spaces to 2
app.set('json spaces', 2);

// Use v1 as prefix for all API endpoints
app.use('/v1', router);

// Launch the server on port 3000
if (!module.parent) app.listen(3000);

module.exports = app;
