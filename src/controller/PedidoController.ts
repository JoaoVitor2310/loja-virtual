import * as readlineSync from 'readline-sync';
import { PedidoModel } from '../models/PedidoModel';
import { PedidoView } from '../views/PedidoView';
import { Pedido } from '../models/Pedido';
import { JogoModel } from '../models/JogoModel';
import { JogoPedido } from '../models/JogoPedido';

export class PedidoController {
    private model: PedidoModel;
    private view: PedidoView;
    private jogoModel: JogoModel;


    public constructor(model: PedidoModel, view: PedidoView, jogoModel: JogoModel) {
        this.model = model;
        this.view = view;
        this.jogoModel = jogoModel;
    }

    public criar_pedido(id: number, id_jogo: number, quantidade: number): void {
        const dataAtual = new Date().toISOString().split('T')[0];

        const jogo = this.jogoModel.list_jogo(id_jogo);
        if (!jogo) {
            this.view.mostrarErro("Jogo não encontrado");
            return;
        }

        const pedido = new Pedido(id, dataAtual);
        const jogoPedido = new JogoPedido(pedido.id, id_jogo, jogo.getPreco(), quantidade);
        this.model.adicionar_jogo_pedido(pedido, jogoPedido);
        this.model.cadastrar(pedido);
        this.view.mostrar_pedido_criado(id);
    }

    public adicionar_jogo(id_jogo: number, id_pedido: number, quantidade: number) { // ALTERAR PARA ID_CLIENTE
        const jogo = this.jogoModel.list_jogo(id_jogo);
        if (!jogo) {
            this.view.mostrarErro("Jogo não encontrado");
            return;
        }

        const pedido = this.model.list_pedido(id_pedido);

        const jogoPedido = new JogoPedido(pedido!.id, id_jogo, jogo.getPreco(), quantidade);
        this.model.adicionar_jogo_pedido(pedido!, jogoPedido);
        this.view.mostrar_jogo_pedido_add(id_pedido);
    }


    public finalizar_pedido(id_pedido: number) { // ALTERAR PARA ID_CLIENTE
        const pedido = this.model.list_pedido(id_pedido);

        const total = this.model.finalizar_pedido(pedido!);
        this.model.preencher_total(pedido!, total);
        this.model.alterar_status(pedido!, 'Fechado');
        this.view.list_pedido(pedido!);
    }

    public realizar_pagamento(id_pedido: number, forma_pagamento: string) {
        const pedido = this.model.list_pedido(id_pedido);
        if(this.model.getStatus(pedido!) !== 'Fechado'){
            this.view.pedido_aberto();
            return;
        }
        
        this.model.alterar_pagamento(pedido!, forma_pagamento);
        this.model.alterar_status(pedido!, 'Pago');
        this.view.list_pedido(pedido!);
    }

    public mostrar_pedido(id: number){
        this.view.list_pedido(this.model.list_pedido(id)!);
    }

    public iniciar(): void {
        let opcao: string;
        do {
            console.log("\n==== Pedidos ====");
            console.log("1 - Criar Pedido");
            console.log("2 - Adicionar Jogo");
            console.log("3 - Finalizar Pedido");
            console.log("4 - Realizar Pagamento");
            console.log("5 - Mostrar Pedido");
            console.log("10 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    const id = Number(readlineSync.question("Qual eh o id do pedido? "));
                    const id_jogo = Number(readlineSync.question("Qual eh o id do jogo? "));
                    const quantidade = Number(readlineSync.question("Qual eh a quantidade do jogo? "));

                    this.criar_pedido(id, id_jogo, quantidade);
                    break;
                case '2': {
                    const id_pedido = Number(readlineSync.question("Qual eh o id do pedido que deseja adicionar? ")); // MUDAR PARA CLIENTE
                    const id_jogo = Number(readlineSync.question("Qual eh o id do jogo que deseja adicionar? "));
                    const quantidade = Number(readlineSync.question("Qual eh a quantidade do jogo? "));
                    this.adicionar_jogo(id_jogo, id_pedido, quantidade); // id do jogo e id do pedido
                    break;
                }
                case '3': {
                    const id_pedido = Number(readlineSync.question("Qual eh o id do pedido? "));
                    this.finalizar_pedido(id_pedido);
                    break;
                }
                case '4': {
                    const id = Number(readlineSync.question("Qual eh o id do pedido? "));
                    const forma_pagamento = readlineSync.question("Qual eh a forma de pagamento do pedido? ");
                    this.realizar_pagamento(id, forma_pagamento);
                    break;
                }
                case '5': {
                    const id = Number(readlineSync.question("Qual eh o id do pedido? "));
                    this.mostrar_pedido(id);
                    break;
                }
                case '10':
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== '10');
    }
}