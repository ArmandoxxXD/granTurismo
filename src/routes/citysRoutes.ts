import {Router} from 'express';
import {citysController} from '../controllers/citysControllers';

class LugaresRoutes {
	public router: Router = Router(); 

    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/',citysController.list);
        //this.router.get('/:idPlace',citysController.getOne);
        this.router.get('/:nomCity',citysController.getCiudad);
        this.router.post('/',citysController.create)
        this.router.delete('/:idCity',citysController.delete)
        //this.router.put('/:idPlace',citysController.update)
    }  
}
const lugaresRoutes = new LugaresRoutes();
export default lugaresRoutes.router;