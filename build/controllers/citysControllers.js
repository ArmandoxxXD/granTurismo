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
exports.citysController = void 0;
const database_1 = __importDefault(require("../database"));
class CitysController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const lugares = yield database_1.default.query('SELECT * FROM citys');
            resp.json(lugares);
        });
    }
    getCiudad(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nomCity } = req.params;
            const citys = yield database_1.default.query('SELECT * FROM citys Where nomCity = ?', [nomCity]);
            resp.json(citys);
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO citys set ?', [req.body]);
            resp.json({ message: 'La ciudad ha sido guardado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCity } = req.params; //Se recupera el id de request params
            const citys = yield database_1.default.query('DELETE FROM citys Where idCity = ?', [idCity]);
            resp.json({ message: 'La ciudad ha sido eliminada' });
        });
    }
}
exports.citysController = new CitysController;
