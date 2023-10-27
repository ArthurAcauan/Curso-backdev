const rl = require('readline-sync');

class Contato {
    nome
    email

    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Model {
    contatos

    constructor() {
        this.contatos = ['Priscila', 'Aline', 'Manuela', 'Edegar', 'Mauricio', 'Antonio'];       ;
    }

    getContatos() {
        return this.contatos;
    }

    cadastrar(nome) {
        this.contatos.push(nome)
    }
}

class View {

    mostrarOpcoes() {
        console.log(
`

MENU
----
(L)istar
(C)adastrar
(M)odificar
(E)xcluir
(S)air
`
);
    }

    receberComando() {
        return rl.question("Comando: ").toUpperCase();
    }

    pedirNome() {
        const nome = rl.question('Nome: ');
        return nome;
    }

    mostrarContatos(contatos) {
        console.table(contatos);
    }

    sucesso() {
        console.log('Ok');
    }

    aguardarConfirmacaoDoUsuario() {
        rl.question('Pressione ENTER pra continuar...')
    }

    pedirIndice() {
        const indice = rl.question("Indice do dado a modificar: ");
        return indice;
    }
    pedirNovoNome() {
        const novoValor = rl.question("Novo valor: ");
        return novoValor;
    }

    pedirExcluir() {
        const indice = rl.question("Indice do dado a excluir: ");
        const dadoExcluido = dados.splice(indice,1);
        return dadoExcluido;
    }

}

class Controller {
    model
    view
    comando;

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.comando = '';
    }

    listar() {
        view.mostrarContatos(model.getContatos());
    }

    cadastrar() {
        const nome = view.pedirNome();
        model.cadastrar(nome);
        view.sucesso();
        view.aguardarConfirmacaoDoUsuario();
    }

    modificar() {
        const indice = view.pedirIndice();
        const novoNome = view.pedirNovoNome();
        model.cadastrar(indice);
        model.cadastrar(novoNome);
        view.sucesso();
    }

    excluir() {
        const excluir = pedirExcluir();
        model.cadastrar(excluir);
        view.sucesso();
    }

    sair() {
        process.exit();
    }

    interpretarComando(comando) {
        this.comando = comando;
        switch (this.comando) {
            case 'L':
                this.listar();
                break;
            case 'C':
                this.cadastrar();
                break;
            case 'M':
                this.modificar();
                break;
            case 'E':
                this.excluir();
                break;
            case 'S':
                this.sair();
                break;
            default:
                break;
        }

    }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);


/**
 * Loop do sistema
 */
function main() {
    while(controller.comando!='s') {
        view.mostrarOpcoes();
        comando = view.receberComando();
        controller.interpretarComando(comando);
    }
}

// 
main();
