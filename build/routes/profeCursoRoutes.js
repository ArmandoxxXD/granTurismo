"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profeCursoControllers_1 = require("../controllers/profeCursoControllers");
class ProfeCursoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', profeCursoControllers_1.profeCursoController.list);
        //this.router.get('/:id',personasController.getOne);
        this.router.post('/', profeCursoControllers_1.profeCursoController.create);
        this.router.delete('/:cveProfesorCurso', profeCursoControllers_1.profeCursoController.delete);
        //this.router.put('/:id',cursosController.update)
    }
}
const profeCursoRoutes = new ProfeCursoRoutes();
exports.default = profeCursoRoutes.router;
