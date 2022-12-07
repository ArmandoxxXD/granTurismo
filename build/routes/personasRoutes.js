"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personasControllers_1 = require("../controllers/personasControllers");
class PersonasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', personasControllers_1.personasController.list);
        //this.router.get('/:id',personasController.getOne);
        this.router.post('/', personasControllers_1.personasController.create);
        this.router.delete('/:cveCurso', personasControllers_1.personasController.delete);
        //this.router.put('/:id',cursosController.update)
    }
}
const personasRoutes = new PersonasRoutes();
exports.default = personasRoutes.router;
