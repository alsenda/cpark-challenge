import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';
import dbConfig from './config/database';

// Initialize http server
const app = express();

// Connecting to the database
mongoose.connect(dbConfig.url);

// Logger that outputs all requests into the console
app.use(morgan('combined'));

// Use v1 as prefix for all API endpoints
app.use('/v1', router);

app.set('json spaces', 2);

// Launch the server on port 3000
app.listen(3000);
