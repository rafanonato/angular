import {Banco} from './Banco'
import {Usuario} from './Usuario'


let novoBanco = new Banco("Bradesco", 2045, 10)
    novoBanco.validaBanco()
    novoBanco.criarTitulo()
    //novoBanco.consultarBanco()
    //novoBanco.verificaConta()

let novoUsuario = new Usuario("Rafael Nonato", 333.222)
    //novoUsuario.cadastrarUsuario()
