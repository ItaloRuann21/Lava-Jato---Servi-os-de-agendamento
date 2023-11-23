// Importa o Mongoose para utilizar suas funcionalidades
const mongoose = require("mongoose")

// Extrai o método de criação de Schema do Mongoose
const Schema = mongoose.Schema

// Define o esquema para o modelo de Usuário
const UserSchema = new mongoose.Schema({
  nome: {
    type: String, // Define um campo 'nome' do tipo String
  },
  telefone: {
    type: String, // Define um campo 'telefone' do tipo String
  },
  email: {
    type: String, // Define um campo 'email' do tipo String
  },
  senha: {
    type: String, // Define um campo 'senha' do tipo String
  },
})

// Cria um modelo 'Usuario' com base no esquema definido
const UserData = mongoose.model("Usuario", UserSchema)

// Exporta o modelo 'UserData' para ser utilizado em outros arquivos
module.exports = UserData
