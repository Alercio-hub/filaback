const mongoose = require('mongoose');

const FormadorSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    regiao: String,
    precoPorHora: Number,
    disponibilidade: Boolean
});

module.exports = mongoose.model('Formador', FormadorSchema);
