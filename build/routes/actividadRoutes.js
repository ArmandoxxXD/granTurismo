"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadControllers_1 = require("../controllers/actividadControllers");
class ActividadRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:cveAct', actividadControllers_1.actividadController.getOne);
    }
}
const actividadRoutes = new ActividadRoutes();
exports.default = actividadRoutes.router;
