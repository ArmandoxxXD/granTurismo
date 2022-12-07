import {Router} from 'express';
import {lugaresController} from '../controllers/lugaresControllers';

class LugaresRoutes {
	public router: Router = Router(); 

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',lugaresController.list);
        //this.router.get('/:idPlace',lugaresController.getOne);
        this.router.get('/:municipio',lugaresController.getMuni);
        this.router.post('/',lugaresController.create)
        this.router.delete('/:idPlace',lugaresController.delete)
        //this.router.put('/:idPlace',lugaresController.update)
    }  
}
const lugaresRoutes = new LugaresRoutes();
export default lugaresRoutes.router;