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
    // public login(): void {
    //     console.log('login');
    // }

    // public editar(): void {
    //     console.log('cadastrar');
    // }
    // public remover(): void {
    //     console.log('cadastrar');
    // }

    public iniciar(): void {
        let opcao: string;
        do {
            console.log("\n==== Loja de Jogos ====");
            console.log("1 - Cadastrar");
            console.log("2 - Login");
            console.log("3 - Editar");
            console.log("4 - Remover");
            console.log("5 - Listar usuários");
            console.log("10 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    console.log("1");
                    const nome = readlineSync.question("Digite o seu nome: ");
                    const email = readlineSync.question("Digite o seu email: ");
                    const telefone = readlineSync.question("Digite o seu telefone: ");

                    const usuario: IUsuario = { nome, email, telefone, tipo: this.tipo };
                    this.cadastrar(usuario);
                    break;
                case '2':
                    console.log("1");
                    break;
                case '5':
                    console.log("1");
                    console.log(this.model.getUsuarios());
                    break;
                case '10':
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== '10');
    }
}