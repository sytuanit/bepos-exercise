const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/tasks', async(req, res) => {
    const tasks = await db.task.findAll({
        where: {
            userId: 1
        },
        include: [
            { model: db.category },
            { model: db.step }
        ]
    });
    res.json({
        items: tasks,
        totalItems: tasks.length
    });
});

router.get('/tasks/:taskId/steps', async(req, res) => {
    const taskId = req.params.taskId;
    const steps = await db.step.findAll({
        where: {
            taskId: taskId
        }
    });
    res.json({
        items: steps,
        totalItems: steps.length
    });
});

router.put('/tasks', async(req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const hasCompleted = req.body.hasCompleted;
    const editedTask = await db.task.update({
        name,
        hasCompleted
    }, { where: { id } });
    res.json(editedTask);
});

module.exports = router;