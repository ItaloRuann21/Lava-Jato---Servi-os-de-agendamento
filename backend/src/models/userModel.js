const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    nome: {
      type: String
    },
    telefone: {
      type: String
    },
    email: {
      type: String
    },
    senha: {
      type: String
    }
});

const UserData = mongoose.model("Usuario", UserSchema);
module.exports = UserData;