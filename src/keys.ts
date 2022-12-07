import {
	DB_HOST,
	DB_NAME,
	DB_PASSWORD,
	DB_USER,
} from './config'

export default {
	    database: {
	    host: DB_HOST, //Si estuviera externa la base de datos aquí iría la ip donde se encuentra la base de datos
	    user: DB_USER,
        password: DB_PASSWORD, //Si existiera poner el password aquí
        database: DB_NAME
	}
}
