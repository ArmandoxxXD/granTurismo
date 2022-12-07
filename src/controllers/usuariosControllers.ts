import{Request,Response} from 'express';
import pool from '../database';

class UsuariosController {
	public async list(req: Request,resp: Response){
        const usuarios = await pool.query('SELECT * FROM usuarios');
        resp.json(usuarios);
    }

    public async getOne(req: Request,resp: Response): Promise<any> {
        const {iduser} = req.params; 
        const usuarios = await pool.query('SELECT * FROM usuarios Where iduser = ?',[iduser]); 
        if (usuarios.length>0) {
            return resp.json(usuarios[0]);
        }
        resp.status(404).json({text : 'El usuario no existe'});
    }
           
    public async create (req: Request,resp: Response): Promise<void> {
        await pool.query('INSERT INTO usuarios set ?',[req.body]);
        resp.json({message: 'El usuario ha sido guardado'});
    }
//    
//
    public async delete (req: Request,resp: Response): Promise<any> {
        const {iduser} = req.params; //Se recupera el id de request params
        const usuarios = await pool.query('DELETE FROM usuarios Where iduser = ?',[iduser]); 
        resp.json({message : 'El usuario ha sido eliminado'});
    }
//        
//
//    public async update(req: Request,resp: Response): Promise<any> {
//        const {id} = req.params; //Se recupera el id de request params
//        await pool.query('UPDATE games SET Where Id = ?',[req.body,id]); 
//        resp.json({message : 'The game was updated'});
//    }
         
}
export const usuariosController = new UsuariosController;
