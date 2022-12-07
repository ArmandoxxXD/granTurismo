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
exports.perfilController = void 0;
const database_1 = __importDefault(require("../database"));
class PerfilController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const perfil = yield database_1.default.query('SELECT * FROM perfil');
            resp.json(perfil);
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPerfil } = req.params;
            const perfil = yield database_1.default.query('SELECT * FROM perfil Where idPerfil = ?', [idPerfil]);
            if (perfil.length > 0) {
                return resp.json(perfil[0]);
            }
            resp.status(404).json({ text: 'El perfil no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO perfil set ?', [req.body]);
            resp.json({ message: 'El perfil ha sido guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPerfil } = req.params; //Se recupera el id de request params
            const perfil = yield database_1.default.query('DELETE FROM perfil Where idPerfil = ?', [idPerfil]);
            resp.json({ message: 'El perfil ha sido eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPerfil } = req.params; //Se recupera el id de request params
            yield database_1.default.query('UPDATE perfil SET ? Where idPerfil = ?', [req.body, idPerfil]);
            resp.json({ message: 'El perfil ha sifo actualizado' });
        });
    }
}
exports.perfilController = new PerfilController;
