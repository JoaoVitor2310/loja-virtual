import * as readlineSync from 'readline-sync';
import { IJogo } from '../interfaces/Jogo';

export class JogoModel {
    private jogos: IJogo[] = [];

    public cadastrar(usuario: IJogo) {
        this.jogos.push(usuario);
    }

    public login() {
    }

    public editar() {
    }

    public remover() {
    }

    public getJogos(): IJogo[] {
        return this.jogos;
    }


}