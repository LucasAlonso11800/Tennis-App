const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../models/User');

router.post('/in', passport.authenticate('local'), async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    res.json(user._id)
});

router.post('/add', async (req, res) => {
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    user.password = await user.encryptPassword(req.body.password)
    try {
        user = await user.save()
        res.json('User saved')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router