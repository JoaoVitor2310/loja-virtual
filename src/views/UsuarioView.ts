import { IUsuario } from "../interfaces/Usuario";

export class UsuarioView {
    public mostrar_usuario_criado(usuario: IUsuario) {
        console.log(`Nome: ${usuario.nome}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Telefone: ${usuario.telefone}`);
        console.log(`Tipo: ${usuario.tipo === "1" ? "CLIENTE" : "ADMIN"}`);
        console.log(`Usuário criado com sucesso!`);
    }
    
    public mostrar_usuarios(usuarios: IUsuario[]) {
        console.log(usuarios);
    }
    
    public email_repetido() {
        console.log('Email ja cadastrado! Tente novamente.');
    }
    
    public login_incorreto() {
        console.log('Login incorreto! Tente novamente.');
    }
    
    public login_completo(usuario: Partial<IUsuario>) {
        console.log(`Usuário ${usuario.email} logado com sucesso!`);
    }
}