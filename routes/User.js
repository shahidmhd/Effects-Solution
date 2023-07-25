
import express from 'express';
const router = express.Router();

// Define your user routes here
// For example:
router.get('/', (req, res) => {
  res.send('User home page');
});

export default router;