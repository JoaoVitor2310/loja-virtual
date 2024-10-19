import { AdminController } from "./controller/AdminController";
import { ClienteController } from "./controller/ClienteController";
import { JogoController } from "./controller/JogoController";
import { PedidoController } from "./controller/PedidoController";
import { Mediator } from "./interfaces/Mediator";
import { AdminModel } from "./models/AdminModel";
import { ClienteModel } from "./models/ClienteModel";
import { JogoModel } from "./models/JogoModel";
import { PedidoModel } from "./models/PedidoModel";
import { AdminView } from "./views/AdminView";
import { ClienteView } from "./views/ClienteView";
import { JogoView } from "./views/JogoView";
import { PedidoView } from "./views/PedidoView";

export class SistemaMediator implements Mediator {
    executarComando(comando: string): void {
        switch (comando) {
            case '1':
                const clienteModel = ClienteModel.getInstance();
                const clienteView = new ClienteView();
                const clienteController = new ClienteController(clienteModel, clienteView);
                clienteController.iniciar();
                break;
            case '2':
                const adminModel = AdminModel.getInstance();
                const adminView = new AdminView();
                const adminController = new AdminController(adminModel, adminView);
                adminController.iniciar();
                break;
            case '3': {
                const jogoModel = JogoModel.getInstance();
                const jogoView = new JogoView();
                const adminModel = AdminModel.getInstance();
                const jogoController = new JogoController(jogoModel, jogoView, adminModel);
                jogoController.iniciar();
                break;
            }
            case '4': {
                const pedidoModel = PedidoModel.getInstance();
                const pedidoView = new PedidoView();
                const jogoModel = JogoModel.getInstance();
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
}