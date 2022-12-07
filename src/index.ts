import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import lugaresRoutes from './routes/lugaresRoutes';

import morgan from 'morgan';
import cors from 'cors';
import citysRoutes from './routes/citysRoutes';
import perfilRoutes from './routes/perfilRoutes';



class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}))
    }
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/users',usuariosRoutes);
        this.app.use('/api/places',lugaresRoutes);
        this.app.use('/api/citys',citysRoutes);
        this.app.use('/api/perfil',perfilRoutes);
    }  
    start(): void{
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