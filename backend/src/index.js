const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());
const port = 3000
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// console.log(process.env.DB_KEY)
mongoose.connect(
  process.env.DB_KEY
);
mongoose.connection.on("connected", function () {
  console.log("Connected to Database");
});
mongoose.connection.on("error", (err) => {
  console.log("Database error "+err);
});



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
  // await usuario.save({ timeout: 20000 })
  res.send(usuario)
})

app.use(function(err, req, res, next){
  console.error(err);
  res.status(422).send({error: err.message});
});
// Executar porta 3000
app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`)
});

app.get("/", function(req, res){
  res.send("End point inválido");
});

const routes = require('./routes/api');
app.use('/api', routes);
