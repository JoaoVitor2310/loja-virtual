import { IJogo } from "../interfaces/Jogo";

export class JogoView {
    public mostrar_jogo_criado(jogo: IJogo) {
        console.log(`Titulo: ${jogo.titulo}`);
        console.log(`Desenvolvedora: ${jogo.desenvolvedora}`);
        console.log(`Plataforma: ${jogo.plataforma}`);
        console.log(`Data de lancamento: ${jogo.data_lancamento}`);
        console.log(`Preço: ${jogo.preco}`);
        console.log(`Descrição: ${jogo.descricao}`);
        console.log(`Quantidade: ${jogo.quantidade}`);
        console.log(`Jogo criado com sucesso!`);
    }
    
    public mostrar_jogos(jogos: IJogo[]) {
        console.log(jogos);
    }
    
    public email_repetido() {
        console.log('Email ja cadastrado! Tente novamente.');
    }
}