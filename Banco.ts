
    import * as _ from 'lodash'
class Banco{
  constructor(public nomeBanco:string, public agencia:number, public tipoC : number ){}

    consultarBanco(nomeBanco:string, agencia:number, tipoC:number){
    console.log(`PARABENS | Sua nova conta foi criada no ${this.nomeBanco} e ${this.agencia} o tipo da sua conta é ${this.tipoC}`)
    }

criarTitulo(){
  console.log(_.pad(" BEM VINDO AO BANCO ", 40, '=  '))
}

  validaBanco(){
    if(this.nomeBanco == null || this.agencia == null){
      console.log("ESCOLHA A O BANCO! ")
    }else{
      console.log("SUA CONTA FOI CRIADA!")
    }
  }

  verificaConta(tipo : tipoConta) {
      let tipoConta = 10

      if(tipoConta == Math.random()){
          console.log("Sua conta é Corrente")
        }else{
          console.log("Sua conta é Universitaria")
        }
      }
}

interface tipoConta{
  tipoConta:number
}

export {Banco, tipoConta}
