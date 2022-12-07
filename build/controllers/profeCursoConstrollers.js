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
exports.profeCursoController = void 0;
const database_1 = __importDefault(require("../database"));
class ProfeCursoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const prfCur = yield database_1.default.query('SELECT * FROM Profe_Curso');
            resp.json(prfCur);
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveProfesorCurso } = req.params;
            const prfCur = yield database_1.default.query('SELECT * FROM Profe_Curso Where cveProfesorCurso = ?', [cveProfesorCurso]);
            if (prfCur.length > 0) {
                return resp.json(prfCur[0]);
            }
            resp.status(404).json({ text: 'El profe curso no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Profe_Curso set ?', [req.body]);
            resp.json({ message: 'El profe curso ha sido guardado' });
        });
    }
    //    
    //
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveProfesorCurso } = req.params; //Se recupera el id de request params
            const prfCur = yield database_1.default.query('DELETE FROM Profe_Curso Where cveProfesorCurso = ?', [cveProfesorCurso]);
            resp.json({ message: 'El profe curso ha sido eliminada' });
        });
    }
}
exports.profeCursoController = new ProfeCursoController;
