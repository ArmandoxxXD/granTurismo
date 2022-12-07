"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosDispoControllers_1 = require("../controllers/cursosDispoControllers");
class CursosDispoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cursosDispoControllers_1.cursosDispoController.list);
        //this.router.get('/:id',cursosDispoController.getOne);
        this.router.post('/', cursosDispoControllers_1.cursosDispoController.create);
        this.router.delete('/:cveCurso', cursosDispoControllers_1.cursosDispoController.delete);
        //this.router.put('/:id',cursosDispoController.update)
    }
}
const cursosDispoRoutes = new CursosDispoRoutes();
exports.default = cursosDispoRoutes.router;
