const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");


router.get("/", controller.index); //Mostrar notas
router.post("/crear", controller.create); //Crear Nota

router.get("/detail/:id", controller.detail); //Mostrar form de edicion
router.put("/detail/:id", controller.saveEdit); //Editar 1 nota

router.delete("/delete/:id",controller.delete); //borrar 1 nota


module.exports = router;