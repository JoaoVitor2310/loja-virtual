import { Usuario } from "./Usuario";

export class Admin extends Usuario {
    private tipo = '2';
    private token = 'jwt_admin';
    constructor(id: number, nome: string, email: string, senha: string, telefone: string) {
        super(id, nome, email, senha, telefone);
    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }
}