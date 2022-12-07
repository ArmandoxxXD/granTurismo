import{Request,Response} from 'express';
import pool from '../database';

class PerfilController {
	public async list(req: Request,resp: Response){
        const perfil = await pool.query('SELECT * FROM perfil');
        resp.json(perfil);
    }

    public async getOne(req: Request,resp: Response): Promise<any> {
        const {idPerfil} = req.params; 
        const perfil = await pool.query('SELECT * FROM perfil Where idPerfil = ?',[idPerfil]); 
        if (perfil.length>0) {
            return resp.json(perfil[0]);
        }
        resp.status(404).json({text : 'El perfil no existe'});
    }
           
    public async create (req: Request,resp: Response): Promise<void> {
        await pool.query('INSERT INTO perfil set ?',[req.body]);
        resp.json({message: 'El perfil ha sido guardado'});
    }

    public async delete (req: Request,resp: Response): Promise<any> {
        const {idPerfil} = req.params; //Se recupera el id de request params
        const perfil = await pool.query('DELETE FROM perfil Where idPerfil = ?',[idPerfil]); 
        resp.json({message : 'El perfil ha sido eliminado'});
    }

    public async update(req: Request,resp: Response): Promise<any> {
        const {idPerfil} = req.params; //Se recupera el id de request params
        await pool.query('UPDATE perfil SET ? Where idPerfil = ?',[req.body,idPerfil]); 
        resp.json({message : 'El perfil ha sifo actualizado'});
    }
         
}
export const perfilController = new PerfilController;