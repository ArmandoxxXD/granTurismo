"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const lugaresRoutes_1 = __importDefault(require("./routes/lugaresRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const citysRoutes_1 = __importDefault(require("./routes/citysRoutes"));
const perfilRoutes_1 = __importDefault(require("./routes/perfilRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/users', usuariosRoutes_1.default);
        this.app.use('/api/places', lugaresRoutes_1.default);
        this.app.use('/api/citys', citysRoutes_1.default);
        this.app.use('/api/perfil', perfilRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
//new Server();// Ejecuta la clase y devuelve un objeto
console.log('WORKS!!!');
console.log('WORKS!!!');
console.log('WORKS!!!');
