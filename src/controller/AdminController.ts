import * as readlineSync from 'readline-sync';
import { UsuarioModel } from '../models/UsuarioModel';
import { UsuarioView } from '../views/UsuarioView';
import { IUsuario } from '../interfaces/Usuario';
import { UsuarioController } from './UsuarioController';
import { AdminModel } from '../models/AdminModel';
import { AdminView } from '../views/AdminView';

export class AdminController extends UsuarioController {
    constructor(model: AdminModel, view: AdminView) {
        super(model, view);
        this.tipo = '2';
    }

    
}