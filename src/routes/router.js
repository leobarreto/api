const express = require('express');
const farmingsController = require('../controllers/farmingsController');

const router = express.Router();

router.get('/farmings', farmingsController.get);
router.post('/farmings', farmingsController.create);
router.delete('/farmings/:id', farmingsController.deleteFarming);
router.put('/farmings/:id', farmingsController.updateFarming);

module.exports = router;
