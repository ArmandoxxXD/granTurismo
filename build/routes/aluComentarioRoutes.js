"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aluComentarioControllers_1 = require("../controllers/aluComentarioControllers");
class AluComentarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', aluComentarioControllers_1.aluComentarioController.list);
        this.router.get('/:cveAlumnoCurso', aluComentarioControllers_1.aluComentarioController.getComentarios);
        this.router.put('/:cveAlumnoCurso', aluComentarioControllers_1.aluComentarioController.enviarComentarios);
    }
}
const aluComentarioRoutes = new AluComentarioRoutes();
exports.default = aluComentarioRoutes.router;
