export abstract class Usuario {
    public id: number;
    private nome: string;
    private email: string;
    private senha: string;
    private telefone: string;
    private logado: boolean = false;

    public constructor(id: number, nome: string, email: string, senha: string, telefone: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
    }

    // Getters
    public getNome(): string {
        return this.nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public getSenha(): string {
        return this.senha;
    }

    public getTelefone(): string {
        return this.telefone;
    }
    
    public getLogado(): boolean {
        return this.logado;
    }


    // Setters
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setSenha(senha: string): void {
        this.senha = senha;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }
    
    public setLogado(status: boolean): void {
        this.logado = status;
    }

}
