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
exports.temasController = void 0;
const database_1 = __importDefault(require("../database"));
class TemasController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const tema = yield database_1.default.query('SELECT * FROM Temas');
            resp.json(tema);
        });
    }
    getCurso(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveCurso } = req.params;
            const temas = yield database_1.default.query('SELECT * FROM Temas Where cveCurso = ?', [cveCurso]);
            resp.json(temas);
        });
    }
    //public async getOne(req: Request,resp: Response): Promise<any> {
    //    const {cveTema} = req.params; 
    //    const tema = await pool.query('SELECT * FROM Temas Where cveTema = ?',[cveTema]); 
    //    if (tema.length>0) {
    //        return resp.json(tema[0]);
    //    }
    //    resp.status(404).json({text : 'El tema no existe'});
    //}
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Temas SET ?', [req.body]);
            resp.json({ message: 'El tema ha sido guardada' });
        });
    }
    //    
    //
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cveTema } = req.params; //Se recupera el id de request params
            const tema = yield database_1.default.query('DELETE FROM Temas Where cveTema = ?', [cveTema]);
            resp.json({ message: 'El tema ha sido eliminada' });
        });
    }
}
exports.temasController = new TemasController;
