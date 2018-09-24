import mongoose from 'mongoose';
import Report from './models/report';

const reports = [
  {
    title: 'Home',
    time: new Date('2018-09-24 16:36:54'),
    position: [50.826735, 4.371092],
  },
  {
    title: 'Workshop Café',
    time: new Date('2018-09-24 17:06:21'),
    position: [50.829508, 4.362348],
  },
  {
    title: 'KBC Groupe SA',
    position: [50.860003, 4.345943],
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/reports');

// Go through each movie
reports.map((data) => {
  // Initialize a model with movie data
  const report = new Report(data);
  // and save it into the database
  report.save();
  return true;
});
