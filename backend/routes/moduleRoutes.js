const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/roleMiddleware');

const {
  createModule,
  getModules,
  updateModule,
  deleteModule
} = require('../controllers/moduleController');

router.post('/', auth, checkRole('admin'), createModule);
router.get('/', auth, getModules);
router.put('/:id', auth, checkRole('admin'), updateModule);
router.delete('/:id', auth, checkRole('admin'), deleteModule);

module.exports = router;