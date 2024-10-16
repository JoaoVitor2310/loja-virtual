import * as readlineSync from 'readline-sync';
import { ClienteController } from './controller/ClienteController';
import { ClienteModel } from './models/ClienteModel';
import { ClienteView } from './views/ClienteView';
import { AdminView } from './views/AdminView';
import { AdminModel } from './models/AdminModel';
import { AdminController } from './controller/AdminController';

export class Main {
    public iniciar_sistema(): void {
        // const model = new UsuarioModel();
        // const view = new UsuarioView();
        // const usuarioController = new UsuarioController(model, view);
        // usuarioController.iniciar();

        console.log("\n==== Loja de Jogos ====");
        console.log("Qual é o seu tipo de login?");
        console.log("1 - CLIENTE");
        console.log("2 - ADMINISTRADOR");
        console.log("10 - Sair");

        let opcao: string;
        opcao = readlineSync.question("Escolha uma opcao: ");

        switch (opcao) {
            case '1':
                // Instancia Cliente
                const clienteModel = new ClienteModel();
                const clienteView = new ClienteView();
                const clienteController = new ClienteController(clienteModel, clienteView);
                console.log('Cliente.')
                clienteController.iniciar();
                break;
            case '2':
                // Instancia Admin
                const adminModel = new AdminModel(); 
                const adminView = new AdminView();
                const adminController = new AdminController(adminModel, adminView);
                console.log('Admin.')
                adminController.iniciar();
                break;
            case '10':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

const main = new Main();
main.iniciar_sistema();