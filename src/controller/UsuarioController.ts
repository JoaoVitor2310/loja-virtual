import * as readlineSync from 'readline-sync';
import { UsuarioModel } from '../models/UsuarioModel';
import { UsuarioView } from '../views/UsuarioView';
import { IUsuario } from '../interfaces/Usuario';

export class UsuarioController {
    private model: UsuarioModel;
    private view: UsuarioView;

    public constructor(model: UsuarioModel, view: UsuarioView) {
        this.model = model;
        this.view = view;
    }

    public cadastrar(usuario: IUsuario): void {
        console.log('cadastrar');
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
            console.log("1 - Cadastrar-se");
            console.log("2 - Login como Cliente");
            console.log("3 - Login como Administrador");
            console.log("10 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    console.log("1");
                    const nome: string = readlineSync.question("Digite o seu nome: ");
                    const email: string = readlineSync.question("Digite o seu email: ");
                    const telefone: string = readlineSync.question("Digite o seu telefone: ");
                    const tipo: string = readlineSync.question("Digite o tipo:\n 1 - CLIENTE \n 2 - ADMIN\n");

                    // Crie um objeto com as informações
                    const usuario = {
                        nome: nome,
                        email: email,
                        telefone: telefone,
                        tipo: tipo
                    };

                    this.cadastrar(usuario);
                    break;
                case '2':
                    console.log("1");
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