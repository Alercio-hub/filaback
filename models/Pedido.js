const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    cliente: String,
    formadorId: mongoose.Schema.Types.ObjectId,
    status: { type: String, default: "pendente" },
    horario: String,
    valor: Number
});

module.exports = mongoose.model('Pedido', PedidoSchema);
