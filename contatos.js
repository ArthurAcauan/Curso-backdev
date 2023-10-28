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

    mostrarOpcoes(comandos) {
        console.log(`\nMENU\n----\n`);
        for (const comando of comandos.keys()) {
            let metodo = comandos.get(comando).name;
            console.log(`(${comando}) - ${metodo}`);    
        }
    
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

    info(mensagem) {
        console.log(mensagem);
    }

    aguardarConfirmacaoDoUsuario() {
        rl.question('Pressione ENTER pra continuar...')
    }
}

class Controller {
    model
    view
    comandos;

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.comando = '';
        
        this.comandos = new Map();
        this.comandos.set('L', this.listar);
        this.comandos.set('C', this.cadastrar);
        this.comandos.set('M', this.modificar);
        this.comandos.set('E', this.excluir);
        this.comandos.set('X', this.comandoX);
        this.comandos.set('O', this.dizOi);
        this.comandos.set('S', this.sair);
    }

    dizOi() {
        view.info('Oi, oi, oi!!!!');
    }
    comandoX() {
        view.info('Ctrl: Comando X ainda não foi implementado.')
    }
    listar() {
        view.mostrarContatos(model.getContatos());
    }

    cadastrar() {
        const nome = view.pedirNome();
        model.cadastrar(nome);
        view.sucesso();
        //view.aguardarConfirmacaoDoUsuario();
    }

    modificar() {
        view.info('Ctrl diz: Método ainda não implementado')
    }

    excluir() {

    }

    sair() {
        process.exit();
    }

    interpretarComando(comando) {
        try {
            this.comandos.get(comando)();
        } catch (e) {
            view.info('Comando não reconhecido');
            view.info(e);
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
    while(true) {
        view.mostrarOpcoes(controller.comandos);
        comando = view.receberComando();
        controller.interpretarComando(comando);
    }
}

// 
main();
