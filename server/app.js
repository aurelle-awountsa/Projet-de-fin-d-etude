const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

// Initialiser  l'application
const app = express();

// Definir le port du serveur
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.json({
        message: "This is node.js backend system"
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

