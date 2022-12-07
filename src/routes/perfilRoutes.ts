import {Router} from 'express';
import {perfilController} from '../controllers/perfilControllers';

class PerfilRoutes {
	public router: Router = Router(); 

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',perfilController.list);
        this.router.get('/:idPerfil',perfilController.getOne);
        this.router.post('/',perfilController.create)
        this.router.delete('/:idPerfil',perfilController.delete)
        this.router.put('/:idPerfil',perfilController.update)
    }  
}
const perfilRoutes = new PerfilRoutes();
export default perfilRoutes.router;