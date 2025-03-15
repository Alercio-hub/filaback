const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Inicializar aplicação Express
const app = express();

// Middlewares (DEVEM vir antes das rotas)
app.use(cors());
app.use(express.json());

// Importar rotas
const authRouter = require('./routes/auth');
const formadoresRouter = require('./routes/formadores');

// Rotas
app.use('/api/auth', authRouter);
app.use('/api/formadores', formadoresRouter);

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'Conexão com o backend funcionando!' });
});

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Conectado"))
  .catch(err => console.error("❌ Erro de conexão ao MongoDB:", err));

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Servidor rodando na porta ${PORT}`));
