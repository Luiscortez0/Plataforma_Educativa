const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware');
const checkRole = require('../middlewares/roleMiddleware');

const {
  createMaterial,
  getMaterialsByModule,
  updateMaterial,
  deleteMaterial
} = require('../controllers/materialController');

router.post('/', auth, checkRole('admin'), createMaterial);

router.get('/:moduleId', auth, getMaterialsByModule);

router.put('/:id', auth, checkRole('admin'), updateMaterial);

router.delete('/:id', auth, checkRole('admin'), deleteMaterial);

module.exports = router;