import * as readlineSync from 'readline-sync';
import { UsuarioController } from './UsuarioController';
import { ClienteModel } from '../models/ClienteModel';
import { ClienteView } from '../views/ClienteView';

export class ClienteController extends UsuarioController {
    constructor(model: ClienteModel, view: ClienteView) {
        super(model, view);
        this.tipo = '1';
    }

    
}