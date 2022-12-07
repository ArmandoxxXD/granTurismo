"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const perfilControllers_1 = require("../controllers/perfilControllers");
class PerfilRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', perfilControllers_1.perfilController.list);
        this.router.get('/:idPerfil', perfilControllers_1.perfilController.getOne);
        this.router.post('/', perfilControllers_1.perfilController.create);
        this.router.delete('/:idPerfil', perfilControllers_1.perfilController.delete);
        this.router.put('/:idPerfil', perfilControllers_1.perfilController.update);
    }
}
const perfilRoutes = new PerfilRoutes();
exports.default = perfilRoutes.router;
