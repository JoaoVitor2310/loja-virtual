import * as readlineSync from 'readline-sync';
import { IJogo } from '../interfaces/Jogo';

export class JogoModel {
    private jogos: IJogo[] = [{
        id: 1,
        titulo: 'GTA V',
        desenvolvedora: 'Rockstar Games',
        plataforma: 'PC',
        data_lancamento: '2013-09-17',
        preco: 99.90,
        descricao: 'Jogo de ação nos tempos atuais',
        quantidade: 10
    }, {
        id: 2,
        titulo: 'Red Dead Redemption 2',
        desenvolvedora: 'Rockstar Games',
        plataforma: 'PC',
        data_lancamento: '2018-10-26',
        preco: 199.90,
        descricao: 'Jogo de velho oeste',
        quantidade: 20
    }
    ];

    public editar_jogo(jogo: IJogo) {
        const jogoExiste = this.jogos.find(j => j.id === jogo.id);
        if (jogoExiste) {
            jogoExiste.titulo = jogo.titulo;
            jogoExiste.desenvolvedora = jogo.desenvolvedora;
            jogoExiste.plataforma = jogo.plataforma;
            jogoExiste.data_lancamento = jogo.data_lancamento;
            jogoExiste.preco = jogo.preco;
            jogoExiste.descricao = jogo.descricao;
            jogoExiste.quantidade = jogo.quantidade;
        }
    }

    public cadastrar(usuario: IJogo) {
        this.jogos.push(usuario);
    }

    public login() {
    }


    public deletar_jogo(id: number) {
        this.jogos = this.jogos.filter(jogo => jogo.id !== id);
    }

    public list_jogos(): IJogo[] {
        return this.jogos;
    }

    public list_jogo(id: number): IJogo | undefined {
        return this.jogos.find(jogo => jogo.id === id);
    }

}