const express = require('express');
const Formador = require('../models/Formador');
const router = express.Router();

router.get('/', async (req, res) => {
    const formadores = await Formador.find();
    res.json(formadores);
});

router.post('/', async (req, res) => {
    const novoFormador = new Formador(req.body);
    await novoFormador.save();
    res.json(novoFormador);
});

module.exports = router;
