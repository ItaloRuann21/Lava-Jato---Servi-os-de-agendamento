// Importa o Mongoose para utilizar sua funcionalidade
const mongoose = require("mongoose")

// Extrai o método de criação de Schema do Mongoose
const Schema = mongoose.Schema

// Define o esquema para o modelo de Agendamento
const AgendamentoSchema = new mongoose.Schema({
  data: {
    type: Date, // Define um campo 'data' do tipo Date
  },
})

// Cria um modelo 'Agendamento' com base no esquema definido
const AgendamentoData = mongoose.model("Agendamento", AgendamentoSchema)

// Exporta o modelo 'Agendamento' para ser utilizado em outros arquivos
module.exports = AgendamentoData
