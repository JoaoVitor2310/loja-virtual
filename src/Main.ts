import * as readlineSync from 'readline-sync';
import { UsuarioController } from './controller/UsuarioController';
import { UsuarioModel } from './models/UsuarioModel';
import { UsuarioView } from './views/UsuarioView';

export class Main {
    public iniciar_sistema(): void {
        const model = new UsuarioModel();
        const view = new UsuarioView();
        const usuarioController = new UsuarioController(model, view);
        usuarioController.iniciar();
        
        
    }
}

const main = new Main();
main.iniciar_sistema();