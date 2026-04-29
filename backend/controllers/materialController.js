const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createMaterial = async (req, res) => {
  try {
    const { module_id, title, description, type, url } = req.body;

    const result = await pool.query(
      `INSERT INTO materials 
      (module_id, title, description, type, url)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [module_id, title, description, type, url]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterialsByModule = async (req, res) => {
  try {
    const { moduleId } = req.params;

    const result = await pool.query(
      'SELECT * FROM materials WHERE module_id = $1',
      [moduleId]
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, type, url } = req.body;

    const result = await pool.query(
      `UPDATE materials
      SET title=$1, description=$2, type=$3, url=$4
      WHERE id=$5
      RETURNING *`,
      [title, description, type, url, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      'DELETE FROM materials WHERE id=$1',
      [id]
    );

    res.json({ message: 'Material eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
