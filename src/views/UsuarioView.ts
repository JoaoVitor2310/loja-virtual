import { Usuario } from "../models/Usuario";

export abstract class UsuarioView {
    public mostrar_usuario_criado(usuario: Usuario): void {
        console.log(`Usuario criado com sucesso!`);
    }
    
    public mostrar_usuarios(usuarios: Usuario[]): void {
        console.log(usuarios);
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
    public usuario_inexistente(id: number): void {
        console.log(`Usuario de id ${id} não encontrado! Tente novamente.`);
    }
    
    public usuario_editado(id: number): void {
        console.log(`Usuario ${id} editado com sucesso!`);
    }
    
    public usuario_deletado(id: number): void {
        console.log(`Usuario ${id} deletado com sucesso!`);
    }
}
