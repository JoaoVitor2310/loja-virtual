import { JogoPedido } from './JogoPedido';
import { Pedido } from './Pedido';

export class PedidoModel {
    private static instance: PedidoModel;
    private pedidos: Pedido[] = [];

    private constructor() {}

    public static getInstance(): PedidoModel { // DP: SINGLETON
        if (!PedidoModel.instance) {
            PedidoModel.instance = new PedidoModel();
        }
        return PedidoModel.instance;
    }

    public cadastrar(pedido: Pedido) {
        this.pedidos.push(pedido);
    }

    public adicionar_jogo_pedido(pedido: Pedido, jogoPedido: JogoPedido) {
        pedido.adicionarJogoPedido(jogoPedido);
    }

    public finalizar_pedido(pedido: Pedido) {
        return pedido.getTotal();
    }

    public preencher_total(pedido: Pedido, total: number) {
        return pedido.setTotal(total);
    }

    public alterar_status(pedido: Pedido, status: string) {
        return pedido.setStatus(status);
    }

    public alterar_pagamento(pedido: Pedido, status: string) {
        return pedido.setFormaPagamento(status);
    }
    
    public list_pedidos(): Pedido[] {
        return this.pedidos;
    }
    
    public list_pedido(id: number): Pedido | undefined {
        return this.pedidos.find(pedido => pedido.id === id);
    }
    
    public getStatus(pedido: Pedido) {
        return pedido.getStatus();
    }
    
}