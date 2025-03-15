const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  // Os clientes devem enviar o token no header "Authorization"
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Sem token, autorização negada' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guarda o id do usuário no request
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token inválido' });
  }
};
