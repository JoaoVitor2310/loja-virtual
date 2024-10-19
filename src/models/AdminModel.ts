import { Admin } from '../models/Admin';
import { UsuarioModel } from './UsuarioModel';

export class AdminModel extends UsuarioModel {
    private static instance: AdminModel;

    private constructor() { 
        super([ 
            new Admin(1, 'Lucas Marvilla', 'lucas@gmail.com', 'lucas', '2299999999') // Inicializa com o mock de Admin
        ]);
    }

    public static getInstance(): AdminModel { // DP: SINGLETON
        if (!AdminModel.instance) {
            AdminModel.instance = new AdminModel();
        }
        return AdminModel.instance; 
    }

    public verificar_token(token: string): boolean {
        return token === 'jwt_admin'; // Token específico para administradores
    }

}