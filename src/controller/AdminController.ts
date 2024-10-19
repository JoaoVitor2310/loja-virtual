import * as readlineSync from 'readline-sync';
import { Admin } from '../models/Admin';
import { AdminModel } from '../models/AdminModel';
import { AdminView } from '../views/AdminView';

export class AdminController {
    private model: AdminModel;
    private view: AdminView;

    public constructor(model: AdminModel, view: AdminView) {
        this.model = model;
        this.view = view;
    }

    public cadastrar(id: number, nome: string, email: string, senha: string, telefone: string): void {
        const admin = new Admin(id, nome, email, senha, telefone);

        if (!this.model.verificar_cadastro(admin.getEmail())) { // Se o email já foi utilizado, não continua com o cadastro 
            this.view.email_repetido();
            return;
        }

        this.model.cadastrar(admin);
        this.view.mostrar_admin_criado(admin);
    }

    public login(email: string, senha: string): void {
        const admin = this.model.login(email, senha);
        if (!admin) {
            this.view.login_incorreto();
            return;
        }

        this.view.login_completo((admin as Admin).getToken());
    }

    public editar(token: string, id: number, nome: string, email: string, senha: string, telefone: string): void {
        if (!this.model.verificar_token(token)) {
            this.view.token_invalido(token);
            return;
        }
        if (!this.model.verificar_cadastro(email)) {
            this.view.admin_inexistente(id);
            return;
        }
        
        const adminEditado = new Admin(id, nome, email, senha, telefone);
        this.model.editar_admin(adminEditado);
        this.view.admin_editado(id);
    }

    public deletar(token: string, id: number): void {
        if (!this.model.verificar_token(token)) {
            this.view.token_invalido(token);
            return;
        }
        
        const admin = this.model.list_admin(id)
        if (!admin) {
            this.view.admin_inexistente(id);
            return;
        }
        this.model.deletar_admin(id);
        this.view.admin_deletado(id);

    }

    public iniciar(): void {
        let opcao: string;
        let continuarMenu = true;
        do {
            console.log("\n==== Admin ====");
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

                    // const admin = { id, nome, email, senha, telefone, tipo: this.tipo };
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
                    const id = Number(readlineSync.question("Qual eh o id do admin que deseja deletar? "));
                    this.deletar(token, id);
                    break;
                }
                case '5':
                    console.log(this.model.getAdmins());
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