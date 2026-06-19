// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Mifumo ya ulinzi na urahisi wa kusoma data (Middleware)
app.use(cors());
app.use(express.json()); // Inaruhusu mfumo kupokea data za JSON (kama oda za wateja)

// Njia kuu ya majaribio (Base Test Route)
app.get('/', (req, res) => {
    res.json({ 
        status: "Active",
        message: "Welcome to Imrano Tech / Electronics Ltd Backend API!",
        location: "Mwanza, Tanzania" 
    });
});

// Kuunganisha njia ya bidhaa kutoka folda ya /routes
app.use('/api/products', require('../routes/products'));

// Kuwasha Seva rasmi
app.listen(PORT, () => {
    console.log(`🚀 Seva ya ImranoTech imewaka rasmi kwenye port namba: ${PORT}`);
});
