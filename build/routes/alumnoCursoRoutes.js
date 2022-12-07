"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnoCursoControllers_1 = require("../controllers/alumnoCursoControllers");
class AlumnoCursoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', alumnoCursoControllers_1.alumnoCursoController.list);
        this.router.get('/:cvePersona', alumnoCursoControllers_1.alumnoCursoController.getMiCursos);
        //this.router.get('/:cveAlumnoCurso',alumnoCursoController.getOne);
        this.router.post('/', alumnoCursoControllers_1.alumnoCursoController.create);
        this.router.delete('/:cveAlumnoCurso', alumnoCursoControllers_1.alumnoCursoController.delete);
        //this.router.put('/:cveAlumnoCurso',cursosController.update)
    }
}
const alumnoCursoRoutes = new AlumnoCursoRoutes();
exports.default = alumnoCursoRoutes.router;
