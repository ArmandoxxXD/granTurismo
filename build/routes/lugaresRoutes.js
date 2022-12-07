"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lugaresControllers_1 = require("../controllers/lugaresControllers");
class LugaresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', lugaresControllers_1.lugaresController.list);
        //this.router.get('/:idPlace',lugaresController.getOne);
        this.router.get('/:municipio', lugaresControllers_1.lugaresController.getMuni);
        this.router.post('/', lugaresControllers_1.lugaresController.create);
        this.router.delete('/:idPlace', lugaresControllers_1.lugaresController.delete);
        //this.router.put('/:idPlace',lugaresController.update)
    }
}
const lugaresRoutes = new LugaresRoutes();
exports.default = lugaresRoutes.router;
