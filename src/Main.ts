import * as readlineSync from 'readline-sync';
import { UsuarioController } from './controller/UsuarioController';

export class Main {
    public iniciar(): void {
        let opcao: string;
        do {
            console.log("\n==== Loja de Jogos ====");
            console.log("1 - Cadastrar-se");
            console.log("2 - Login como Cliente");
            console.log("3 - Login como Administrador");
            console.log("10 - Sair");
    
            opcao = readlineSync.question("Escolha uma opcao: ");
    
            switch (opcao) {
                case '1':
                    const usuarioController = new UsuarioController();
                    usuarioController.cadastrar();
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