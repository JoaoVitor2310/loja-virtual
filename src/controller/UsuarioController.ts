import * as readlineSync from 'readline-sync';
import { Usuario } from '../models/Usuario';
import { UsuarioModel } from '../models/UsuarioModel';
import { UsuarioView } from '../views/UsuarioView';

export abstract class UsuarioController {
    private model: UsuarioModel;
    private view: UsuarioView;

    public constructor(model: UsuarioModel, view: UsuarioView) {
        this.model = model;
        this.view = view;
    }

    protected abstract factoryCriarUsuario(id: number, nome: string, email: string, senha: string, telefone: string): Usuario; // DP: FACTORY METHOD

    public cadastrar(id: number, nome: string, email: string, senha: string, telefone: string): void {
        const usuario = this.factoryCriarUsuario(id, nome, email, senha, telefone);

        if (!this.model.verificar_cadastro(usuario.getEmail())) { // Se o email já foi utilizado, não continua com o cadastro 
            this.view.email_repetido();
            return;
        }

        this.model.cadastrar(usuario);
        this.view.mostrar_usuario_criado(usuario);
    }

    public login(email: string, senha: string): void {
        const usuario = this.model.login(email, senha);
        if (!usuario) {
            this.view.login_incorreto();
            return;
        }

        this.view.login_completo((usuario as Usuario).getToken());
    }

    public editar(token: string, id: number, nome: string, email: string, senha: string, telefone: string): void {
        if (!this.model.verificar_token(token)) {
            this.view.token_invalido(token);
            return;
        }
        if (!this.model.verificar_cadastro(email)) {
            this.view.usuario_inexistente(id);
            return;
        }
        
        const usuarioEditado = this.factoryCriarUsuario(id, nome, email, senha, telefone);
        this.model.editar_usuario(usuarioEditado);
        this.view.usuario_editado(id);
    }

    public deletar(token: string, id: number): void {
        if (!this.model.verificar_token(token)) {
            this.view.token_invalido(token);
            return;
        }
        
        const usuario = this.model.list_usuario(id)
        if (!usuario) {
            this.view.usuario_inexistente(id);
            return;
        }
        this.model.deletar_usuario(id);
        this.view.usuario_deletado(id);

    }

    public iniciar(): void {
        let opcao: string;
        let continuarMenu = true;
        do {
            console.log("\n==== Usuario ====");
            console.log("1 - Cadastrar");
            console.log("2 - Login");
            console.log("3 - Editar");
            console.log("4 - Deletar");
            console.log("5 - Listar usuários");
            console.log("10 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1': {
                    const id = Number(readlineSync.question("Digite o id: "));
                    const nome = readlineSync.question("Digite o seu nome: ");
                    const email = readlineSync.question("Digite o seu email: ");
                    const senha = readlineSync.question("Digite o seu senha: ");
                    const telefone = readlineSync.question("Digite o seu telefone: ");
                    // const tipo = readlineSync.question("Digite o seu tipo: ");

                    // const usuario = { id, nome, email, senha, telefone, tipo: this.tipo };
                    this.cadastrar(id, nome, email, senha, telefone);
                    break;
                }
                case '2': {
                    const email = readlineSync.question("Digite o seu email: ");
                    const senha = readlineSync.question("Digite o seu senha: ");

                    this.login(email, senha);
                    break;
                }
                case '3': {
                    const token = readlineSync.question("Digite o seu token de acesso: ");
                    const id = Number(readlineSync.question("Digite o id: "));
                    const nome = readlineSync.question("Digite o seu nome: ");
                    const email = readlineSync.question("Digite o seu email: ");
                    const senha = readlineSync.question("Digite o seu senha: ");
                    const telefone = readlineSync.question("Digite o seu telefone: ");
                    
                    this.editar(token, id, nome, email, senha, telefone);
                    break;
                }
                case '4': {
                    const token = readlineSync.question("Digite o seu token de acesso: ");
                    const id = Number(readlineSync.question("Qual eh o id do usuario que deseja deletar? "));
                    this.deletar(token, id);
                    break;
                }
                case '5':
                    console.log(this.model.getUsuarios());
                    break;
                case '10':
                    console.log("Voltando para menu principal...");
                    return;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (continuarMenu);
    }

}