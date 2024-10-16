import * as readlineSync from 'readline-sync';
import { UsuarioModel } from '../models/UsuarioModel';
import { UsuarioView } from '../views/UsuarioView';
import { IUsuario } from '../interfaces/Usuario';

export abstract class UsuarioController {
    private model: UsuarioModel;
    private view: UsuarioView;
    protected tipo: string = '';

    public constructor(model: UsuarioModel, view: UsuarioView) {
        this.model = model;
        this.view = view;
    }

    public cadastrar(usuario: IUsuario): void {
        if (!this.model.verificar_cadastro(usuario)) { // Se falhar, não continua com o cadastro 
            this.view.email_repetido();
            return;
        }
        this.model.cadastrar(usuario);
        this.view.mostrar_usuario_criado(usuario);
    }

    // this.view.mostrar_usuarios(this.model.getUsuarios());
    public login(usuario: Partial<IUsuario>): void {
        if (!this.model.login(usuario)) {
            this.view.login_incorreto();
        }
        this.view.login_completo(usuario);
    }

    public editar(usuario: IUsuario): void {
        if (this.model.verificar_cadastro(usuario)) { 
            this.view.usuario_inexistente();
            return;
        }
        this.model.editar(usuario);
        this.view.usuario_editado();
    }

    public deletar(id: number): void {
        const usuario = this.model.list_usuario(id)
        if (!usuario) {
            this.view.usuario_inexistente();
            return;
        }
        this.model.deletar_usuario(id)
        this.view.usuario_deletado();
    }

    public iniciar(): void {
        let opcao: string;
        let continuarMenu = true;
        do {
            console.log("\n==== Menu de USUARIO ====");
            console.log("1 - Cadastrar");
            console.log("2 - Login");
            console.log("3 - Editar");
            console.log("4 - Remover");
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

                    const usuario = { id, nome, email, senha, telefone, tipo: this.tipo };
                    this.cadastrar(usuario);
                    break;
                }
                case '2': {
                    const email = readlineSync.question("Digite o seu email: ");
                    const senha = readlineSync.question("Digite o seu senha: ");

                    const usuario = { email, senha };
                    this.login(usuario);
                    break;
                }
                case '3': {
                    const id = Number(readlineSync.question("Digite o id: "));
                    const nome = readlineSync.question("Digite o seu nome: ");
                    const email = readlineSync.question("Digite o seu email: ");
                    const senha = readlineSync.question("Digite o seu senha: ");
                    const telefone = readlineSync.question("Digite o seu telefone: ");

                    const usuario = { id, nome, email, senha, telefone, tipo: this.tipo };
                    this.editar(usuario);
                    break;
                }
                case '4': {
                    const id = Number(readlineSync.question("Qual eh o id do jogo que deseja deletar? "));
                    this.deletar(id);
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