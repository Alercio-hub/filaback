const mongoose = require('mongoose');

const FormadorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  regiao: { type: String, required: true },
  precoPorHora: { type: Number, required: true },
  disponibilidade: { type: String, required: true } // Armazena valores como "manha", "tarde", etc.
});

module.exports = mongoose.model('Formador', FormadorSchema);
