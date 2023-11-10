const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgendamentoSchema = new mongoose.Schema({
    data: {
      type: Date
    },
});

const AgendamentoData = mongoose.model("Agendamento", AgendamentoSchema);
module.exports = AgendamentoData;