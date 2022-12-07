import {Router} from 'express';
import {indexController} from '../controllers/indexControllers';

class IndexRoutes {
	public router: Router = Router(); //Se está creando la propiedad que guardará el objeto devuelto y se inicializa esta propiedad en la misma línea de código

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',indexController.index);
        //this.router.get('/',(req,resp) => resp.send('Hello'))
    }  
}
const indexRoutes = new IndexRoutes()
export default indexRoutes.router;
