"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadesControllers_1 = require("../controllers/actividadesControllers");
class ActividadesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', actividadesControllers_1.actividadesController.list);
        this.router.get('/:cveTema', actividadesControllers_1.actividadesController.getActividades);
        this.router.post('/', actividadesControllers_1.actividadesController.create);
        this.router.delete('/:cveAct', actividadesControllers_1.actividadesController.delete);
        //this.router.put('/:idactividadesController.update)
    }
}
const actividadesRoutes = new ActividadesRoutes();
exports.default = actividadesRoutes.router;
