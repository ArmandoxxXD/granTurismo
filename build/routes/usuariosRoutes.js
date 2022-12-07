"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosControllers_1 = require("../controllers/usuariosControllers");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usuariosControllers_1.usuariosController.list);
        this.router.get('/:iduser', usuariosControllers_1.usuariosController.getOne);
        this.router.post('/', usuariosControllers_1.usuariosController.create);
        this.router.delete('/:iduser', usuariosControllers_1.usuariosController.delete);
        //this.router.put('/:iduser',usuariosController.update)
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
