const router = require('express').Router();
const FarmingsController = require('../controllers/Farmings');
const UsersController = require('../controllers/Users');

router.get('/users', UsersController.get);
router.get('/users/:id', UsersController.getById);
router.post('/users', UsersController.create);
router.put('/users/:id', UsersController.update);
router.delete('/users/:id', UsersController.destroy);

router.get('/farmings', FarmingsController.get);
router.post('/farmings', FarmingsController.create);
router.put('/farmings/:id', FarmingsController.update);
router.delete('/farmings/:id', FarmingsController.destroy);

module.exports = router;
