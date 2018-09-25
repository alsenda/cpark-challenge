import { Router } from 'express';
// Import index action from report controller
import { create, list } from './controllers/report';

// Initialize the router
const router = Router();

// Register a new report in DB
router.route('/report').post(create);

// Get the list of reports
router.route('/report/:latitude/:longitude/:distance?').get(list);

export default router;
