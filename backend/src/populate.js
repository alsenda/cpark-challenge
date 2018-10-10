import mongoose from 'mongoose';
import Report from './models/report';

const reports = [
  {
    title: 'Home',
    time: new Date('2018-09-19 16:36:54'),
    position: { type: 'Point', coordinates: [50.826735, 4.371092] },
  },
  {
    title: 'Workshop Café',
    time: new Date('2018-09-21 17:06:21'),
    position: { type: 'Point', coordinates: [50.829508, 4.362348] },
  },
  {
    title: 'KBC Groupe SA',
    position: { type: 'Point', coordinates: [50.860003, 4.345943] },
  },
  {
    title: 'Christallerie Laeken',
    position: { type: 'Point', coordinates: [50.876377, 4.360346] },
  },
  {
    title: 'Tennis club Itterbeek',
    position: { type: 'Point', coordinates: [50.837482, 4.249890] },
  },
  {
    title: 'Brussels Airport',
    position: { type: 'Point', coordinates: [50.902327, 4.486127] },
  },
  {
    title: 'Université Libre de Bruxelles',
    position: { type: 'Point', coordinates: [50.813901, 4.382236] },
  },
  {
    title: 'Atomium',
    position: { type: 'Point', coordinates: [50.895095, 4.341562] },
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/reports', { useNewUrlParser: true });

// Go through each movie
reports.map((data) => {
  // Initialize a model with movie data
  const report = new Report(data);
  // and save it into the database
  report.save();
  return 0;
});
