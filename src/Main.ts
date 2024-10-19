import * as readlineSync from 'readline-sync';
import { ClienteController } from './controller/ClienteController';
import { ClienteModel } from './models/ClienteModel';
import { ClienteView } from './views/ClienteView';
import { AdminView } from './views/AdminView';
import { AdminModel } from './models/AdminModel';
import { AdminController } from './controller/AdminController';
import { JogoModel } from './models/JogoModel';
import { JogoView } from './views/JogoView';
import { JogoController } from './controller/JogoController';
import { PedidoController } from './controller/PedidoController';
import { PedidoView } from './views/PedidoView';
import { PedidoModel } from './models/PedidoModel';

export class Main {
    public iniciar_sistema(): void {
        let opcao: string;
        do {
            console.log("\n==== Loja de Jogos ====");
            console.log("1 - Login como CLIENTE");
            console.log("2 - Login como ADMINISTRADOR");
            console.log("3 - JOGOS");
            console.log("4 - PEDIDO");
            console.log("5 - JOGO_PEDIDO");
            console.log("10 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    const clienteModel = new ClienteModel();
                    const clienteView = new ClienteView();
                    const clienteController = new ClienteController(clienteModel, clienteView);
                    clienteController.iniciar();
                    break;
                case '2':
                    const adminModel = new AdminModel();
                    const adminView = new AdminView();
                    const adminController = new AdminController(adminModel, adminView);
                    adminController.iniciar();
                    break;
                case '3': {
                    const jogoModel = new JogoModel();
                    const jogoView = new JogoView();
                    const adminModel = new AdminModel();
                    const jogoController = new JogoController(jogoModel, jogoView, adminModel);
                    jogoController.iniciar();
                    break;
                }
                case '4': {
                    const pedidoModel = new PedidoModel();
                    const pedidoView = new PedidoView();
                    const jogoModel = new JogoModel();
                    const pedidoController = new PedidoController(pedidoModel, pedidoView, jogoModel);
                    pedidoController.iniciar();
                    break;
                }
                case '10':
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        }
        while (opcao !== '10');
    }
}

const main = new Main();
main.iniciar_sistema();