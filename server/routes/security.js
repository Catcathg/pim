const { Router } = require("express");
const User = require('../models/Users')
const router = Router();

router.post("/register", async (req, res) => {
    try {
        const user = await User.createUser(req.body.username, req.body.password);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/Login", async (req, res) => {
    try {
        const user = await User.login(req.body);
        if (!user) {
            res.sendStatus(401);
        } else res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;