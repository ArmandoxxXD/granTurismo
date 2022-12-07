"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temasControllers_1 = require("../controllers/temasControllers");
class TemasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', temasControllers_1.temasController.list);
        this.router.get('/:cveCurso', temasControllers_1.temasController.getCurso);
        this.router.post('/', temasControllers_1.temasController.create);
        this.router.delete('/:cveTema', temasControllers_1.temasController.delete);
        //this.router.put('/:idtemasController.update)
    }
}
const temasRoutes = new TemasRoutes();
exports.default = temasRoutes.router;
