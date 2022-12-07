import{Request,Response} from 'express';
import pool from '../database';

class LugaresController {
	public async list(req: Request,resp: Response){
        const lugares = await pool.query('SELECT * FROM lugaresV1');
        resp.json(lugares);
    }

    /*public async getOne(req: Request,resp: Response): Promise<any> {
        const {idPlace} = req.params; 
        const lugares = await pool.query('SELECT * FROM lugaresV1 Where idPlace = ?',[idPlace]); 
        if (lugares.length>0) {
            return resp.json(lugares[0]);
        }
        resp.status(404).json({text : 'El lugar no existe'});
    }*/

    public async getMuni(req: Request,resp: Response): Promise<any> {
        const {municipio} = req.params; 
        const lugares = await pool.query('SELECT * FROM lugaresV1 Where municipio = ?',[municipio]); 
        resp.json(lugares);
    }
           
    public async create (req: Request,resp: Response): Promise<void> {
        await pool.query('INSERT INTO lugaresV1 set ?',[req.body]);
        resp.json({message: 'El lugar ha sido guardado'});
    }

    public async delete (req: Request,resp: Response): Promise<any> {
        const {idPlace} = req.params; //Se recupera el id de request params
        const lugares = await pool.query('DELETE FROM lugaresV1 Where idPlace = ?',[idPlace]); 
        resp.json({message : 'El lugar ha sido eliminado'});
    }

//    public async update(req: Request,resp: Response): Promise<any> {
//        const {id} = req.params; //Se recupera el id de request params
//        await pool.query('UPDATE games SET Where Id = ?',[req.body,id]); 
//        resp.json({message : 'The game was updated'});
//    }
         
}
export const lugaresController = new LugaresController;
