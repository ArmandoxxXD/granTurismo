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
exports.cursosDispoController = void 0;
const database_1 = __importDefault(require("../database"));
class CusrsosDispoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_1.default.query('SELECT * FROM Curso');
            resp.json(cursos);
        });
    }
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveCurso } = req.params; //Se recupera el id de request params
            const cursos = yield database_1.default.query('SELECT * FROM Curso Where cveCurso = ?', [cveCurso]);
            if (cursos.length > 0) {
                return resp.json(cursos[0]);
            }
            resp.status(404).json({ text: 'El curso no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Curso set ?', [req.body]);
            resp.json({ message: 'El curso ha sido guardado' });
        });
    }
    //    
    //
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveCurso } = req.params; //Se recupera el id de request params
            const cursos = yield database_1.default.query('DELETE FROM Curso Where cveCurso = ?', [cveCurso]);
            resp.json({ message: 'El curso ha sido eliminado' });
        });
    }
}
exports.cursosDispoController = new CusrsosDispoController;
