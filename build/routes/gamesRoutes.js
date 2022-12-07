"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControllers_1 = require("../controllers/gamesControllers");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); //Se está creando la propiedad que guardará el objeto devuelto y se inicializa esta propiedad en la misma línea de código
        this.config();
    }
    config() {
        this.router.get('/', gamesControllers_1.gamesController.list);
        this.router.get('/:id', gamesControllers_1.gamesController.getOne);
        this.router.post('/', gamesControllers_1.gamesController.create);
        this.router.delete('/:id', gamesControllers_1.gamesController.delete);
        this.router.put('/:id', gamesControllers_1.gamesController.update);
        //this.router.get('/',(req,resp) => resp.send('Games'))
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
