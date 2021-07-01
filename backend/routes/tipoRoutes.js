const router = require("express").Router();
const controller = require("../controllers/tipo.controllers");

//agregar el tipo de usuario a la base de datos (profesor = 1 , alumno = 2, apoderado = 3)
router.post("/", controller.tipo)

module.exports = router;