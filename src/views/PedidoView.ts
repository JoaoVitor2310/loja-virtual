import { Pedido } from "../models/Pedido";

export class PedidoView {
    public mostrar_pedido_criado(id: number): void {
        console.log(`Pedido ${id} criado com sucesso!`);
    }

    public list_pedidos(pedidos: Pedido[]) {
        console.log(pedidos);
    }

    public list_pedido(pedido: Pedido) {
        console.log(pedido);
    }
    
    public pedido_nao_encontrado(id: number): void {
        console.log(`Pedido de id ${id} não encontrado. Tente novamente!`);
    }
    
    public pedido_deletado(id: number): void {
        console.log(`Pedido de id ${id} deletado com sucesso!`);
    }
    
    public pedido_editado(id: number): void {
        console.log(`Pedido de id ${id} editado com sucesso!`);
    }
    
    public mostrarErro(mensagem: string): void {
        console.log(mensagem);
    }
    
    public mostrar_jogo_pedido_add(id: number): void {
        console.log(`JogoPedido de id ${id} adicionado com sucesso!`);
    }
    
    public mostrar_total_pedido(total: number): void {
        console.log(`O total do pedido é: R$${total}`);
    }
    
    public mostrar_status(status: string): void {
        console.log(status);
    }
    
    public pedido_aberto(): void {
        console.log('Pedido não está fechado, tente novamente.');
    }

}