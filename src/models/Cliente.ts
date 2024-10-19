import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
    private cpf: string;
    constructor(id: number, nome: string, email: string, senha: string, telefone: string, tipo: string, cpf: string) {
        super(id, nome, email, senha, telefone);
        this.cpf = cpf;
    }
}