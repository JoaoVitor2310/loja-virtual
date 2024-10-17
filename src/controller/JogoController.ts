import * as readlineSync from 'readline-sync';
import { JogoModel } from '../models/JogoModel';
import { JogoView } from '../views/JogoView';
import { Jogo } from '../models/Jogo';

export class JogoController {
    private model: JogoModel;
    private view: JogoView;


    public constructor(model: JogoModel, view: JogoView) {
        this.model = model;
        this.view = view;
    }
    public cadastrar_jogo(id: number, titulo: string, desenvolvedora: string, plataforma: string, data_lancamento: string, preco: number, descricao: string, quantidade: number): void {
        const jogo = new Jogo(id, titulo, desenvolvedora, plataforma, data_lancamento, preco, descricao, quantidade);
        this.model.cadastrar(jogo);
        this.view.mostrar_jogo_criado(jogo);
    }

    public list_jogos(): void {
        this.view.list_jogos(this.model.list_jogos());
    }

    public list_jogo(id: number): void {
        const jogo = this.model.list_jogo(id);
        if (!jogo) {
            this.view.jogo_nao_encontrado(id);
            return;
        }
        this.view.list_jogo(jogo);
    }

    public deletar_jogo(id: number): void {
        this.model.deletar_jogo(id)
        this.view.jogo_deletado(id);
    }

    public editar_jogo(id: number, titulo: string, desenvolvedora: string, plataforma: string, data_lancamento: string, preco: number, descricao: string, quantidade: number): void {
        const jogoExiste = this.model.list_jogo(id);
        if (!jogoExiste) {
            this.view.jogo_nao_encontrado(id);
            return;
        }
        const jogoEditado = new Jogo(id, titulo, desenvolvedora, plataforma, data_lancamento, preco, descricao, quantidade);
        this.model.editar_jogo(jogoEditado);
        this.view.jogo_editado(id);
    }

    public iniciar(): void {
        let opcao: string;
        do {
            console.log("\n==== Loja de Jogos ====");
            console.log("1 - Jogos disponíveis");
            console.log("2 - Selecionar jogo");
            console.log("3 - Cadastrar jogo (ADMIN)");
            console.log("4 - Editar jogo (ADMIN)");
            console.log("5 - Deletar jogo (ADMIN)");
            console.log("10 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    this.list_jogos();
                    break;
                case '2': {
                    const id = Number(readlineSync.question("Qual eh o id do jogo que deseja ver? "));
                    this.list_jogo(id);
                    break;
                }
                case '3': {
                    const id = Number(readlineSync.question("Qual eh o id do jogo? "));
                    const titulo = readlineSync.question("Qual eh o titulo do jogo? ");
                    const desenvolvedora = readlineSync.question("Qual eh a desenvolvedora do jogo? ");
                    const plataforma = readlineSync.question("Qual eh a plataforma do jogo? ");
                    const data_lancamento = readlineSync.question("Qual eh data_lancamento do jogo? ");
                    const preco = Number(readlineSync.question("Qual eh o preco do jogo? "));
                    const descricao = readlineSync.question("Qual eh o descricao do jogo? ");
                    const quantidade = Number(readlineSync.question("Qual eh a quantidade do jogo? "));
                    this.cadastrar_jogo(id, titulo, desenvolvedora, plataforma, data_lancamento, preco, descricao, quantidade);
                    break;
                }
                case '4': {
                    const id = Number(readlineSync.question("Qual eh o id do jogo? "));
                    const titulo = readlineSync.question("Qual eh o titulo do jogo? ");
                    const desenvolvedora = readlineSync.question("Qual eh a desenvolvedora do jogo? ");
                    const plataforma = readlineSync.question("Qual eh a plataforma do jogo? ");
                    const data_lancamento = readlineSync.question("Qual eh data_lancamento do jogo? ");
                    const preco = Number(readlineSync.question("Qual eh o preco do jogo? "));
                    const descricao = readlineSync.question("Qual eh o descricao do jogo? ");
                    const quantidade = Number(readlineSync.question("Qual eh a quantidade do jogo? "));
                    this.editar_jogo(id, titulo, desenvolvedora, plataforma, data_lancamento, preco, descricao, quantidade);
                    break;
                }
                case '5': {
                    const id = Number(readlineSync.question("Qual eh o id do jogo que deseja deletar? "));
                    this.deletar_jogo(id);
                    break;
                }
                case '10':
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao !== '10');
    }
}