import {Banco} from './Banco'

class Usuario extends Banco{
  constructor(public nome : string, public cpf : number){
  }



  cadastrarUsuario(nome:string, cpf:number){
    if(this.nome == null || this.cpf == null){
      console.log(`Voce não conseguiu inserir o nome ou cpf`)
    }else{
      console.log(`Parabens | ${this.nome}, ${this.cpf}`)
    }
  }
}
export {Usuario}
