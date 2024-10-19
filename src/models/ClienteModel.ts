import { Cliente } from "./Cliente";
import { UsuarioModel } from "./UsuarioModel";

export class ClienteModel extends UsuarioModel {
    private static instance: ClienteModel;

    private constructor() { 
        super([
            new Cliente(1, 'João Vitor Gouveia', 'jv@gmail.com', 'jv', '2299999998')
        ]);
    }

    public static getInstance(): ClienteModel { // DP: SINGLETON
        if (!ClienteModel.instance) {
            ClienteModel.instance = new ClienteModel(); 
        }
        return ClienteModel.instance;
    }

    public verificar_token(token: string): boolean {
        return token === 'jwt_cliente'; // MOCK de logincliente
    }
}