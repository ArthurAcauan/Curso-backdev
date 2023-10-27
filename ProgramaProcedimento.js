const rl = require('readline-sync')
const dados = ['Priscila', 'Aline', 'Manuela', 'Edegar', 'Mauricio', 'Antonio']

function listar() {
    console.table(dados)
}

function cadastrar() {
    const nome = rl.question('Nome: ')
    dados.push(nome)
    console.log('Ok')
    rl.question('Pressione ENTER pra continuar...')
}

function modificar() {
    const indice = rl.question("Indice do dado a modificar: ")
    const novoValor = rl.question("Novo valor: ")
    dados[indice] = novoValor
    console.log("Ok.")
    rl.question('Pressione ENTER pra continuar...')
}

function excluir() {
    const indice = rl.question("Indice do dado a excluir: ")
    const dadoExcluido = dados.splice(indice,1)
    console.log(`Ok. Excluido ${dadoExcluido}`)
    rl.question('Pressione ENTER pra continuar...')
}

while(true) {

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
)
    const opcao = rl.question("Opcao: ").toUpperCase()

    if (opcao == 'L') {
        listar()
    } else if(opcao == 'C') {
        cadastrar()
    } else if(opcao == 'M') {
        modificar()
    } else if (opcao == 'E') {
        excluir()
    } else if (opcao == 'S') {
        break
    } else {
        console.log('Opcao invalida')
    }


}

console.log("FIM DO PROGRAMA")
