import{Request,Response} from 'express';
import pool from '../database';

class CitysController {
	public async list(req: Request,resp: Response){
        const lugares = await pool.query('SELECT * FROM citys');
        resp.json(lugares);
    }

    public async getCiudad(req: Request,resp: Response): Promise<any> {
        const {nomCity} = req.params; 
        const citys = await pool.query('SELECT * FROM citys Where nomCity = ?',[nomCity]); 
        resp.json(citys);
    }
           
    public async create (req: Request,resp: Response): Promise<void> {
        await pool.query('INSERT INTO citys set ?',[req.body]);
        resp.json({message: 'La ciudad ha sido guardado'});
    }

    public async delete (req: Request,resp: Response): Promise<any> {
        const {idCity} = req.params; //Se recupera el id de request params
        const citys = await pool.query('DELETE FROM citys Where idCity = ?',[idCity]); 
        resp.json({message : 'La ciudad ha sido eliminada'});
    }

//    public async update(req: Request,resp: Response): Promise<any> {
//        const {id} = req.params; //Se recupera el id de request params
//        await pool.query('UPDATE games SET Where Id = ?',[req.body,id]); 
//        resp.json({message : 'The game was updated'});
//    }
         
}
export const citysController = new CitysController;