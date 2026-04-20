const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');

router.get('/private', auth, (req, res) => {
  res.json({
    message: 'Ruta protegida',
    user: req.user
  });
});

module.exports = router;