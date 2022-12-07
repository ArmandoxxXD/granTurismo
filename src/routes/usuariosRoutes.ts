import {Router} from 'express';
import {usuariosController} from '../controllers/usuariosControllers';

class UsuariosRoutes {
	public router: Router = Router(); 

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',usuariosController.list);
        this.router.get('/:iduser',usuariosController.getOne);
        this.router.post('/',usuariosController.create)
        this.router.delete('/:iduser',usuariosController.delete)
        //this.router.put('/:iduser',usuariosController.update)
    }  
}
const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;