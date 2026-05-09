const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/', async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    const savedUser = await user.save();

    res.json(savedUser);
});

router.delete('/:id', async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.json({
        message: 'User Deleted'
    });
});

module.exports = router;