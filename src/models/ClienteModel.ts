import { Cliente } from "./Cliente";
import { UsuarioModel } from "./UsuarioModel";

export class ClienteModel extends UsuarioModel {
    constructor() { // Só para ter um exemplo 
        super([
            new Cliente(1, 'João Vitor Gouveia', 'jv@gmail.com', 'jv', '2299999998')
        ]);
    }

    public verificar_token(token: string): boolean {
        return token === 'jwt_cliente'; // MOCK de logincliente
    }
}