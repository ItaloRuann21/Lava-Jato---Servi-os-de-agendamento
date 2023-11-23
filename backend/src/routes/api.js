// Importa o Express para criar rotas
const express = require("express")
// Cria um novo roteador usando o Express Router
const router = express.Router()

// Importa o controlador API que contém funções para lidar com essas rotas
const apiController = require("../controllers/apiController")

// Define as rotas e associa cada rota a uma função no controlador apiController

// Rota para teste simples
router.get("/teste", apiController.test)

// Rota para obter detalhes dos usuários
router.get("/details", apiController.details)

// Rota para adicionar um novo usuário
router.post("/user", apiController.add)

// Rota para criar um novo usuário
router.post("/create", apiController.create)

// Rota para atualizar informações de um usuário existente usando seu ID
router.put("/user/:id", apiController.update)

// Rota para deletar um usuário usando seu ID
router.delete("/user/:id", apiController.delete)

// Rota para realizar o login do usuário
router.post("/login", apiController.login)

// Rota para criar um novo agendamento
router.post("/create/agendamento", apiController.createAgendamento)

// Exporta o roteador para que ele possa ser utilizado em outros arquivos
module.exports = router
