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
exports.aluComentarioController = void 0;
const database_1 = __importDefault(require("../database"));
class AluComentarioController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluCu = yield database_1.default.query('SELECT cveCurso, cvePersona, comentarioCurso, comentarioPlataforma FROM Alumno_Curso');
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
    getComentarios(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveAlumnoCurso } = req.params;
            const aluCom = yield database_1.default.query('SELECT * FROM Alumno_Curso Where cveAlumnoCurso = ?', [cveAlumnoCurso]);
            resp.json(aluCom);
        });
    }
    //    
    //
    //public async delete (req: Request,resp: Response): Promise<any> {
    //    const {cveAlumnoCurso} = req.params; //Se recupera el id de request params
    //    const aluCu = await pool.query('DELETE FROM Alumno_Curso Where cveAlumnoCurso = ?',[cveAlumnoCurso]); 
    //    resp.json({message : 'El alumno curso ha sido eliminada'});
    //}
    //        
    //
    enviarComentarios(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveAlumnoCurso } = req.params; //Se recupera el id de request params
            yield database_1.default.query('UPDATE Alumno_Curso SET ? Where cveAlumnoCurso = ?', [req.body, cveAlumnoCurso]);
            resp.json({ message: 'Tus comentarios han sido enviados' });
        });
    }
}
exports.aluComentarioController = new AluComentarioController;
