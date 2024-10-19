// new Usuario(1, 'Lucas Marvilla', 'lucas@gmail.com', 'lucas', '2299999999'),
import { Usuario } from '../models/Usuario';

export abstract class UsuarioModel {
    protected usuarios: Usuario[] = [];

    constructor(usuarios: Usuario[]) { 
        this.usuarios = usuarios;
    }

    public verificar_cadastro(email: string) {
        const emailCadastrado = this.usuarios.find(a => a.getEmail() === email);
        if (emailCadastrado) return false; // Email indisponível
        return true; // Email disponível
    }

    public cadastrar(usuario: Usuario) {
        this.usuarios.push(usuario);
    }

    public login(email: string, senha: string): boolean | Usuario { // Separar em dois? Um pra buscar e outro pra setar como logado?
        const usuario = this.usuarios.find(a => a.getEmail() === email && a.getSenha() === senha);
        if (!usuario) return false;
        usuario.setLogado(true);
        return usuario;
    }

    public editar_usuario(usuarioAtualizado: Usuario) {
        const usuarioExiste = this.usuarios.find(j => j.id === usuarioAtualizado.id);
        if (usuarioExiste) {
            usuarioExiste.setNome(usuarioAtualizado.getNome());
            usuarioExiste.setEmail(usuarioAtualizado.getEmail());
            usuarioExiste.setSenha(usuarioAtualizado.getSenha());
            usuarioExiste.setTelefone(usuarioAtualizado.getTelefone());
        }
    }

    public remover() {
    }

    public getUsuarios(): Usuario[] {
        return this.usuarios;
    }

    public list_usuario(id: number): Usuario | undefined {
        return this.usuarios.find(usuario => usuario.id === id);
    }

    public deletar_usuario(id: number) {
        const usuarioIndex = this.usuarios.findIndex(usuario => usuario.id === id);

        if (usuarioIndex === -1) { // Não encontrou
            return;
        }

        this.usuarios.splice(usuarioIndex, 1);
    }

    public abstract verificar_token(token: string): boolean; // DP: TEMPLATE METHOD

}