import { Admin } from "../models/Admin";

export class AdminView {
    public mostrar_admin_criado(admin: Admin): void {
        console.log(`Admin criado com sucesso!`);
    }
    
    public mostrar_admins(admins: Admin[]): void {
        console.log(admins);
    }
    
    public email_repetido(): void {
        console.log('Email ja cadastrado! Tente novamente.');
    }
    
    public login_incorreto(): void {
        console.log('Login incorreto! Tente novamente.');
    }
    
    public login_completo(token: string): void {
        console.log(`Usuário logado com sucesso! Token: ${token}`);
    }
   
    public token_invalido(token: string): void {
        console.log(`Token inválido. Tente novamente.`);
    }
    public admin_inexistente(id: number): void {
        console.log(`Admin de id ${id} não encontrado! Tente novamente.`);
    }
    
    public admin_editado(id: number): void {
        console.log(`Admin ${id} editado com sucesso!`);
    }
    
    public admin_deletado(id: number): void {
        console.log(`Admin ${id} deletado com sucesso!`);
    }
}
