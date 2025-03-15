const mongoose = require('mongoose');

const FormadorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: true },
  regiao: { type: String, required: true },  // Remova "required: true" se não for obrigatório
  precoPorHora: { type: Number, required: true },  // Ou remova "required" se desejar
  disponibilidade: { type: String, required: true }  // Se deseja armazenar "manha", "tarde", etc.
});
