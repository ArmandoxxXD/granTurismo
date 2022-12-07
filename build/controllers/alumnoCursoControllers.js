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
exports.alumnoCursoController = void 0;
const database_1 = __importDefault(require("../database"));
class AlumnoCursoController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluCu = yield database_1.default.query('SELECT * FROM Alumno_Curso');
            resp.json(aluCu);
        });
    }
    //    public async getOne(req: Request,resp: Response): Promise<any> {
    //        const {cveAlumnoCurso} = req.params; 
    //        const aluCu = await pool.query('SELECT * FROM Alumno_Curso Where cveAlumnoCurso = ?',[cveAlumnoCurso]); 
    //        if (aluCu.length>0) {
    //            return resp.json(aluCu[0]);
    //        }
    //        resp.status(404).json({text : 'El alumno curso no existe'});
    //    }
    getMiCursos(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cvePersona } = req.params;
            const aluCu = yield database_1.default.query('SELECT * FROM Alumno_Curso Where cvePersona = ?', [cvePersona]);
            resp.json(aluCu);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Alumno_Curso set ?', [req.body]);
            resp.json({ message: 'El alumno curso ha sido guardado' });
        });
    }
    //    
    //
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveAlumnoCurso } = req.params; //Se recupera el id de request params
            const aluCu = yield database_1.default.query('DELETE FROM Alumno_Curso Where cveAlumnoCurso = ?', [cveAlumnoCurso]);
            resp.json({ message: 'El alumno curso ha sido eliminada' });
        });
    }
}
exports.alumnoCursoController = new AlumnoCursoController;
