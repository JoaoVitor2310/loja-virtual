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

    public cadastrar(usuario: IJogo) {
        this.jogos.push(usuario);
    }

    public login() {
    }

    public editar() {
    }

    public remover() {
    }

    public list_jogos(): IJogo[] {
        return this.jogos;
    }
    
    public list_jogo(id: number): IJogo | undefined {
        return this.jogos.find(jogo => jogo.id === id);
    }

}