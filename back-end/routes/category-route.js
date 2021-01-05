const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/categories', async(req, res) => {
    const taskCategories = await db.category.findAll();
    res.json({
        items: taskCategories,
        totalItems: taskCategories.length
    });
});

module.exports = router;