import Report from '../models/report';

/**
 * Creates and saves a new report
 */
export const create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Report can not be empty',
    });
  }

  // Creates a Report
  const report = new Report({
    title: req.body.title || 'Untitled',
    position: [req.body.latitude, req.body.longitude],
  });

  // Saves Report
  report.save()
    .then(data => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Unexpected error while creating a report.',
      });
    });

  return report;
};

/**
 * Retrieves and returns all reports around the given coordinates.
 * @param {float} latitude
 * @param {float} longitude
 * @param {number} [distance=10000]
 */
export const list = (req, res) => {
  // Validate request
  if (!req) {
    return res.status(400).send({
      message: 'Report can not be empty',
    });
  }

  // Find and display reports
  Report.find({
    position: {
      $near: {
        $maxDistance: req.params.distance || 10000,
        $geometry: {
          type: 'Point',
          coordinates: [req.params.latitude, req.params.longitude],
        },
      },
    },
  })
    .then((reports) => {
      res.send(res.json(reports));
      return reports;
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Unexpected error while retrieving reports.',
      });
      return { error: err.message };
    });
  return null;
};
