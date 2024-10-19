import { Admin } from '../models/Admin';

export class AdminModel {
    private admins: Admin[] = [
        new Admin(1, 'Lucas Marvilla', 'lucas@gmail.com', 'lucas', '2299999999'),
    ];

    public verificar_cadastro(email: string) {
        const emailCadastrado = this.admins.find(a => a.getEmail() === email);
        if (emailCadastrado) return false; // Email indisponível
        return true; // Email disponível
    }

    public cadastrar(admin: Admin) {
        this.admins.push(admin);
    }

    public login(email: string, senha: string): boolean | Admin { // Separar em dois? Um pra buscar e outro pra setar como logado?
        const admin = this.admins.find(a => a.getEmail() === email && a.getSenha() === senha);
        if (!admin) return false;
        admin.setLogado(true);
        return admin;
    }

    public editar_admin(adminAtualizado: Admin) {
        const adminExiste = this.admins.find(j => j.id === adminAtualizado.id);
        if (adminExiste) {
            adminExiste.setNome(adminAtualizado.getNome());
            adminExiste.setEmail(adminAtualizado.getEmail());
            adminExiste.setSenha(adminAtualizado.getSenha());
            adminExiste.setTelefone(adminAtualizado.getTelefone());
        }
    }

    public remover() {
    }

    public getAdmins(): Admin[] {
        return this.admins;
    }

    public list_admin(id: number): Admin | undefined {
        return this.admins.find(admin => admin.id === id);
    }

    public deletar_admin(id: number) {
        const adminIndex = this.admins.findIndex(admin => admin.id === id);

        if (adminIndex === -1) { // Não encontrou
            return;
        }

        this.admins.splice(adminIndex, 1);
    }

    public verificar_token(token: string): boolean { // MOCK DE LOGIN
        return token === 'jwt_admin';
    }

}