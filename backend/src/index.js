const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
const port = 3000
mongoose.connect(
  "mongodb+srv://bd-lavajato-username:IwI2FnKtPckLlOxI@backend-lavajato.vfyouqn.mongodb.net/?retryWrites=true&w=majority"
)

const Usuario = mongoose.model("usuario", {
  nome: String,
  telefone: Number,
  email: String,
  senha: String,
})

// GET
app.get("/", (req, res) => {
  res.send("Hello World!")
})

// POST
app.post("/", async (req, res) => {
  const usuario = new Usuario({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
    senha: req.body.senha,
  })
  await usuario.save({ timeout: 20000 })
  res.send(usuario)
})

// Executar porta 3000
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
})
