"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citysControllers_1 = require("../controllers/citysControllers");
class LugaresRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', citysControllers_1.citysController.list);
        //this.router.get('/:idPlace',citysController.getOne);
        this.router.get('/:nomCity', citysControllers_1.citysController.getCiudad);
        this.router.post('/', citysControllers_1.citysController.create);
        this.router.delete('/:idCity', citysControllers_1.citysController.delete);
        //this.router.put('/:idPlace',citysController.update)
    }
}
const lugaresRoutes = new LugaresRoutes();
exports.default = lugaresRoutes.router;
