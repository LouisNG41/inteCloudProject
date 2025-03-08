const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const messages = [
        "Bonjour, le monde!",
        "Bienvenue sur notre microservice!",
        "Message aléatoire généré!",
        "Le temps passe vite!",
        "Node.js est génial!",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.json({ message: randomMessage });
});

module.exports = router;