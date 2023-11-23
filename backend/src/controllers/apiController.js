// Importação dos modelos de usuário e agendamento
const user = require("../models/userModel")
const agendamento = require("../models/agendamentoModel")

// Função para validar o formato do email usando uma expressão regular
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

// Método para criar um novo usuário
exports.create = function (req, res, next) {
  // Verifica se o email é válido
  if (validateEmail(req.body.email)) {
    var query = { email: req.body.email }
    // Procura se o email já existe no banco de dados
    user
      .find(query)
      .then(function (u) {
        if (u.length > 0) {
          // Se o usuário já existe, retorna um erro
          res
            .status(400)
            .send(JSON.stringify("Usuário já existe no banco de dados"))
        } else {
          // Se o usuário não existe, cria um novo usuário
          user
            .create(req.body)
            .then(function (u) {
              res.send(JSON.stringify("Usuário criado com sucesso"))
            })
            .catch(next)
        }
      })
      .catch(next)
  } else {
    // Se o email não for válido, retorna um erro
    res.status(400).send(JSON.stringify("Email não válido."))
  }
}

// Método para realizar o login do usuário
exports.login = function (req, res, next) {
  var queryEmail = { email: req.body.email }
  // Verifica se o email do usuário existe
  user
    .find(queryEmail)
    .then(function (u) {
      if (u.length < 1) {
        // Se o email não for encontrado, retorna um erro
        res.status(400).send(JSON.stringify("Email do usuário não encontrado"))
      } else {
        var querySenha = { email: req.body.email, senha: req.body.senha }
        // Verifica se a senha do usuário corresponde ao email fornecido
        user
          .find(querySenha)
          .then(function (u) {
            if (u.length < 1) {
              // Se a senha não for encontrada, retorna um erro
              res
                .status(400)
                .send(JSON.stringify("Senha do usuário não encontrado"))
            } else {
              // Se o login for bem-sucedido, retorna uma mensagem de sucesso
              res.send(JSON.stringify("Usuário logado"))
            }
          })
          .catch(next)
      }
    })
    .catch(next)
}

// Método para obter detalhes de todos os usuários
exports.details = function (req, res) {
  user.find({}).then(function (u) {
    res.send(u)
  })
}

// Método para indicar o tipo de requisição para adicionar usuários
exports.add = function (req, res) {
  res.send({ type: "POST" })
}

// Método para atualizar um usuário pelo ID
exports.update = function (req, res, next) {
  user
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      user.findOne({ _id: req.params.id }).then(function (u) {
        res.send(u)
      })
    })
    .catch(next)
}

// Método para deletar um usuário pelo ID
exports.delete = function (req, res, next) {
  user
    .findByIdAndRemove({ _id: req.params.id })
    .then(function (u) {
      res.send(u)
    })
    .catch(next)
}

// Método para criar um novo agendamento
exports.createAgendamento = function (req, res, next) {
  agendamento
    .create(req.body)
    .then(function (u) {
      res.send(u)
    })
    .catch(next)
}

// Método de teste simples
exports.test = function (req, res) {
  res.send("Olá! Teste ao Controller")
}
