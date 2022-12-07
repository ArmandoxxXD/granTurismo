"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actividadController = void 0;
const database_1 = __importDefault(require("../database"));
class ActividadController {
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveAct } = req.params;
            const actividad = yield database_1.default.query('SELECT * FROM Actividades Where cveAct = ?', [cveAct]);
            if (actividad.length > 0) {
                return resp.json(actividad[0]);
            }
            resp.status(404).json({ text: 'La actividad no existe' });
        });
    }
}
exports.actividadController = new ActividadController;
