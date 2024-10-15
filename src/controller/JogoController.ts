import * as readlineSync from 'readline-sync';

export class Main {
    
    
    
    // JogoController
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

const main = new Main();
main.iniciar();