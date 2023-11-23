// Importação dos módulos necessários
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config() // Carrega as variáveis de ambiente do arquivo .env
const cors = require("cors")

// Criação da aplicação Express
const app = express()
app.use(cors()) // Habilita o CORS para permitir solicitações de diferentes origens
app.use(express.json()) // Habilita o uso de JSON no corpo das requisições
const port = 3000 // Define a porta de escuta para o servidor

// Configuração do bodyParser para analisar corpos de solicitação
const bodyParser = require("body-parser")
app.use(bodyParser.json())

// Conexão com o banco de dados MongoDB usando mongoose
mongoose.connect(process.env.DB_KEY) // Conecta ao banco de dados usando a chave fornecida no arquivo .env
mongoose.connection.on("connected", function () {
  console.log("Connected to Database") // Mensagem exibida ao conectar ao banco de dados
})
mongoose.connection.on("error", (err) => {
  console.log("Database error " + err) // Mensagem exibida em caso de erro na conexão com o banco de dados
})

// Rota principal
app.get("/", (req, res) => {
  res.send("Hello World!") // Rota raiz que retorna "Hello World!"
})

// Rota POST para criar um novo usuário
app.post("/", async (req, res) => {
  // Cria um novo usuário com base nos dados enviados no corpo da solicitação
  const usuario = new Usuario({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    senha: req.body.senha,
  })
  // await usuario.save({ timeout: 20000 }) - Possível salvamento do usuário no banco de dados
  res.send(usuario) // Retorna os dados do usuário criado
})

// Middleware para lidar com erros
app.use(function (err, req, res, next) {
  console.error(err) // Registra o erro no console
  res.status(422).send({ error: err.message }) // Retorna um status 422 e a mensagem de erro
})

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`) // Mensagem exibida ao iniciar o servidor na porta definida
})

// Rota de erro para qualquer outra requisição
app.get("/", function (req, res) {
  res.send("End point inválido") // Rota que retorna "End point inválido" para qualquer rota não especificada
})

// Importação e uso das rotas definidas em './routes/api'
const routes = require("./routes/api")
app.use("/api", routes) // Define o prefixo '/api' para todas as rotas definidas em './routes/api'
