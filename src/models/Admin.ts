import { Usuario } from "./Usuario";

export class Admin extends Usuario {
    private tipo = '2';
    constructor(id: number, nome: string, email: string, senha: string, telefone: string) {
        super(id, nome, email, senha, telefone);
    }
}