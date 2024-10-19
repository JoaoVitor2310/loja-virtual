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
import { SistemaMediator } from './Mediator';

export class Main {
    public iniciar_sistema(): void {
        const mediator = new SistemaMediator();
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
            mediator.executarComando(opcao);
        }
        while (opcao !== '10');
    }
}

const main = new Main();
main.iniciar_sistema();