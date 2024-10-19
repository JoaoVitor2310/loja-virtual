import * as readlineSync from 'readline-sync';
import { Jogo } from './Jogo';

export class JogoModel {
    private static instance: JogoModel;
    private jogos: Jogo[] = [
        new Jogo(1, "The Legend of Zelda: Breath of the Wild", "Nintendo", "Nintendo Switch", "2017-03-03", 300, "Um jogo de aventura em um mundo aberto.", 10),
        new Jogo(2, "Super Mario Odyssey", "Nintendo", "Nintendo Switch", "2017-10-27", 250, "Um jogo de plataforma em um mundo aberto.", 15)
    ];

    private constructor() {}

    public static getInstance(): JogoModel { // DP: SINGLETON
        if (!JogoModel.instance) {
            JogoModel.instance = new JogoModel();
        }
        return JogoModel.instance;
    }


    public cadastrar(jogo: Jogo) {
        this.jogos.push(jogo);
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