import * as readlineSync from 'readline-sync';
import { IJogo } from '../interfaces/Jogo';
import { JogoModel } from '../models/JogoModel';
import { JogoView } from '../views/JogoView';

export class JogoController {
    private model: JogoModel;
    private view: JogoView;


    public constructor(model: JogoModel, view: JogoView) {
        this.model = model;
        this.view = view;
    }
    public cadastrar_jogo(jogo: IJogo): void {
        this.model.cadastrar(jogo);
        this.view.mostrar_jogo_criado(jogo);
    }

    public iniciar(): void {
        let opcao: string;
        do {
            console.log("\n==== Loja de Jogos ====");
            console.log("1 - Jogos disponíveis");
            console.log("2 - Jogos disponíveis por categoria");
            console.log("3 - Selecionar jogo");
            console.log("4 - Cadastrar jogo (ADMIN)");
            console.log("5 - Editar jogo (ADMIN)");
            console.log("6 - Remover jogo (ADMIN)");
            console.log("10 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    console.log("1");
                    break;
                case '2':
                    console.log("1");
                    break;
                case '10':
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== '10');
    }
}