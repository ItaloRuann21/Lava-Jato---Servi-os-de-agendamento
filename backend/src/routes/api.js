const express = require('express');
const router = express.Router();

const apiController = require("../controllers/apiController");
router.get("/teste", apiController.test);
router.get("/details", apiController.details);
router.post("/user", apiController.add);
router.post("/create", apiController.create);
router.put("/user/:id", apiController.update);
router.delete("/user/:id", apiController.delete);
router.post("/login", apiController.login);
router.post("/create/agendamento", apiController.createAgendamento);

module.exports = router;