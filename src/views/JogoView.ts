import { Jogo } from "../models/Jogo";

export class JogoView {
    public mostrar_jogo_criado(jogo: Jogo) {
        console.log(`Jogo ${jogo.getTitle()} criado com sucesso!`);
    }

    public list_jogos(jogos: Jogo[]) {
        console.log(jogos);
    }

    public list_jogo(jogo: Jogo) {
        console.log(jogo);
    }
    
    public jogo_nao_encontrado(id: number): void {
        console.log(`Jogo de id ${id} não encontrado. Tente novamente!`);
    }
    
    public jogo_deletado(id: number): void {
        console.log(`Jogo de id ${id} deletado com sucesso!`);
    }
    
    public jogo_editado(id: number): void {
        console.log(`Jogo de id ${id} editado com sucesso!`);
    }
    
    public acesso_negado(): void {
        console.log(`Você não tem acesso para manter jogo.`);
    }

}