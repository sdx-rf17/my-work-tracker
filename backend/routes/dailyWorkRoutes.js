const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all daily work entries
router.get('/', (req, res) => {
  db.query('SELECT * FROM daily_work', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST new entry
router.post('/', (req, res) => {
  const { project_name, description_project } = req.body;
  db.query('INSERT INTO daily_work (project_name, description_project) VALUES (?, ?)', 
    [project_name, description_project], 
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, project_name, description_project });
    }
  );
});

module.exports = router;
