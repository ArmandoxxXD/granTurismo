import {Request,Response} from 'express';
import pool from '../database';

class IndexController {
	public index(req:Request,resp:Response){
		resp.send('H3llo');
    }
}
export const indexController = new IndexController; //Instaciar a la clase IndexController
