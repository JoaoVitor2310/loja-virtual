import { IUsuario } from "../interfaces/Usuario";

export class UsuarioView {
    public mostrar_usuario_criado(usuario: IUsuario) {
        console.log(`Usuário criado com sucesso!`);
        console.log(`Nome: ${usuario.nome}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Telefone: ${usuario.telefone}`);
        console.log(`Tipo: ${usuario.tipo === "1" ? "CLIENTE" : "ADMIN"}`);
    }
    
    public mostrar_usuarios(usuarios: IUsuario[]) {
        console.log(usuarios);
    }
    
    public email_repetido() {
        console.log('Email ja cadastrado! Tente novamente.');
    }
}