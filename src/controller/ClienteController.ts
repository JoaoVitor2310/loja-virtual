import * as readlineSync from 'readline-sync';
import { UsuarioController } from './UsuarioController';
import { ClienteModel } from '../models/ClienteModel';
import { ClienteView } from '../views/ClienteView';
import { Cliente } from '../models/Cliente';

export class ClienteController extends UsuarioController {
    constructor(model: ClienteModel, view: ClienteView) {
        super(model, view);
    }

    protected factoryCriarUsuario(id: number, nome: string, email: string, senha: string, telefone: string): Cliente {
        return new Cliente(id, nome, email, senha, telefone);
    }
}