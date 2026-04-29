const express = require('express');
const router = express.Router();

const checkRole = require('../middlewares/roleMiddleware');
const auth = require('../middlewares/authMiddleware');

const { 
    register, 
    login, 
} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

router.get('/protected', auth, (req, res) => {
  res.json({ message: 'Acceso a ruta protegida concedido' });
});

module.exports = router;