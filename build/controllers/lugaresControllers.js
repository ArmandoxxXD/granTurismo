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
exports.lugaresController = void 0;
const database_1 = __importDefault(require("../database"));
class LugaresController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const lugares = yield database_1.default.query('SELECT * FROM lugaresV1');
            resp.json(lugares);
        });
    }
    /*public async getOne(req: Request,resp: Response): Promise<any> {
        const {idPlace} = req.params;
        const lugares = await pool.query('SELECT * FROM lugaresV1 Where idPlace = ?',[idPlace]);
        if (lugares.length>0) {
            return resp.json(lugares[0]);
        }
        resp.status(404).json({text : 'El lugar no existe'});
    }*/
    getMuni(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { municipio } = req.params;
            const lugares = yield database_1.default.query('SELECT * FROM lugaresV1 Where municipio = ?', [municipio]);
            resp.json(lugares);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO lugaresV1 set ?', [req.body]);
            resp.json({ message: 'El lugar ha sido guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPlace } = req.params; //Se recupera el id de request params
            const lugares = yield database_1.default.query('DELETE FROM lugaresV1 Where idPlace = ?', [idPlace]);
            resp.json({ message: 'El lugar ha sido eliminado' });
        });
    }
}
exports.lugaresController = new LugaresController;
