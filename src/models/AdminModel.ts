import { Admin } from '../models/Admin';
import { UsuarioModel } from './UsuarioModel';

export class AdminModel extends UsuarioModel {
    constructor() { // Só para ter um exemplo 
        super([
            new Admin(1, 'Lucas Marvilla', 'lucas@gmail.com', 'lucas', '2299999999')
        ]);
    }

    public verificar_token(token: string): boolean {
        return token === 'jwt_admin'; // Token específico para administradores
    }

}