const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign({
        id: user._id,
        email: user.email,
    }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
};

router.post('/in', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error('User not found');

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error('Wrong username or password');

        const token = generateToken(user);
        res.json({
            userId: user._id,
            token
        })
    }
    catch (err) {
        throw new Error(err)
    }
});

router.post('/add', async (req, res) => {
    try {
        const email = await User.findOne({ email: req.body.email });
        if (email) throw new Error('Email already registered');

        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(req.body.password, salt);

        const users = await User.insertMany(newUser);
        const token = generateToken(users[0]);

        res.json({
            userId: users[0]._id,
            token
        })
    } catch (err) {
        throw new Error(err)
    }
});

module.exports = router