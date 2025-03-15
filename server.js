const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);


// Importar rotas
const formadoresRouter = require('./routes/formadores');

// Inicializar aplicação Express
const app = express();

// Middlewares (DEVEM vir antes das rotas)
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Conectado"))
    .catch(err => console.error("❌ Erro de conexão ao MongoDB:", err));

// Rotas
app.use('/api/formadores', formadoresRouter);  // Agora está após os middlewares

// Rota raiz
app.get("/", (req, res) => {
    res.send("🚀 Backend do FilaporVoce funcionando!");
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌍 Servidor rodando na porta ${PORT}`));