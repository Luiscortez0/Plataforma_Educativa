const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 IMPORTANTE
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});

const testRoutes = require('./routes/testRoutes');
app.use('/api/test', testRoutes);