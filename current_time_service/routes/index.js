// service2/routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ time: currentTime });
});

module.exports = router;
