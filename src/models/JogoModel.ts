//     {
//     id: 1,
//     titulo: 'GTA V',
//     desenvolvedora: 'Rockstar Games',
//     plataforma: 'PC',
//     data_lancamento: '2013-09-17',
//     preco: 99.90,
//     descricao: 'Jogo de ação nos tempos atuais',
//     quantidade: 10
// }, {
//     id: 2,
//     titulo: 'Red Dead Redemption 2',
//     desenvolvedora: 'Rockstar Games',
//     plataforma: 'PC',
//     data_lancamento: '2018-10-26',
//     preco: 199.90,
//     descricao: 'Jogo de velho oeste',
//     quantidade: 20
// }


import * as readlineSync from 'readline-sync';
import { Jogo } from './Jogo';

export class JogoModel {
    private jogos: Jogo[] = [];

    public cadastrar(jogo: Jogo) {
        this.jogos.push(jogo);
    }

    public login() {
    }


    public deletar_jogo(id: number) {
        const jogoIndex = this.jogos.findIndex(jogo => jogo.id === id);

        if (jogoIndex === -1) {
            return;
        }

        this.jogos.splice(jogoIndex, 1);
    }

    public list_jogos(): Jogo[] {
        return this.jogos;
    }

    public list_jogo(id: number): Jogo | undefined {
        return this.jogos.find(jogo => jogo.id === id);
    }

    public editar_jogo(jogoAtualizado: Jogo) {
        const jogoExiste = this.jogos.find(j => j.id === jogoAtualizado.id);
        if (jogoExiste) {
            jogoExiste.setTitle(jogoAtualizado.getTitle());
            jogoExiste.setDesenvolvedora(jogoAtualizado.getDesenvolvedora());
            jogoExiste.setPlataforma(jogoAtualizado.getPlataforma());
            jogoExiste.setDataLancamento(jogoAtualizado.getDataLancamento());
            jogoExiste.setPreco(jogoAtualizado.getPreco());
            jogoExiste.setDescricao(jogoAtualizado.getDescricao());
            jogoExiste.setQuantidade(jogoAtualizado.getQuantidade());
        }
    }
}