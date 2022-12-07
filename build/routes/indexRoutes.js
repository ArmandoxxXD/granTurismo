"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Se está creando la propiedad que guardará el objeto devuelto y se inicializa esta propiedad en la misma línea de código
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexController.index);
        //this.router.get('/',(req,resp) => resp.send('Hello'))
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
