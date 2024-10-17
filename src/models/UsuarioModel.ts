import * as readlineSync from 'readline-sync';
import { IUsuario } from '../interfaces/Usuario';

export class UsuarioModel {
    private usuarios: IUsuario[] = [{
        id: 1,
        nome: 'Lucas Marvilla',
        email: 'marvilla@gmail.com',
        senha: '1234',
        telefone: '(11) 99999-9999',
        tipo: '2',
    },
    {
        id: 2,
        nome: 'João Vitor Gouveia',
        email: 'jv@gmail.com',
        senha: '1234',
        telefone: '(11) 98888-8888',
        tipo: '1',
    }];

    public verificar_cadastro(usuario: IUsuario) {
        const emailCadastrado = this.usuarios.find(u => u.email === usuario.email);

        if (emailCadastrado) {

            return false; // Cadastro falhou
        }

        return true; // Email disponível

    }

    public cadastrar(usuario: IUsuario) {
        this.usuarios.push(usuario);
    }

    public login(usuario: Partial<IUsuario>) {
        const login = this.usuarios.find(u => u.email === usuario.email && u.senha === usuario.senha);
        if (!login) return false;
        return true;
    }

    public editar(usuario: IUsuario) {
        const usuarioExiste = this.usuarios.find(u => u.id === usuario.id);
        if (usuarioExiste) {
            usuarioExiste.nome = usuario.nome;
            usuarioExiste.email = usuario.email;
            usuarioExiste.senha = usuario.senha;
            usuarioExiste.telefone = usuario.telefone;
            usuarioExiste.tipo = usuario.tipo;
        }
    }

    public remover() {
    }

    public getUsuarios(): IUsuario[] {
        return this.usuarios;
    }

    public list_usuario(id: number): IUsuario | undefined {
        return this.usuarios.find(usuario => usuario.id === id);
    }

    public deletar_usuario(id: number) {
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    }

}