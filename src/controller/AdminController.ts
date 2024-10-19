import * as readlineSync from 'readline-sync';
import { Admin } from '../models/Admin';
import { AdminModel } from '../models/AdminModel';
import { AdminView } from '../views/AdminView';
import { UsuarioController } from './UsuarioController';

export class AdminController extends UsuarioController {
    constructor(model: AdminModel, view: AdminView) {
        super(model, view);
    }
    protected factoryCriarUsuario(id: number, nome: string, email: string, senha: string, telefone: string): Admin {
        return new Admin(id, nome, email, senha, telefone);
    }
}