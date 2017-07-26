class Banco{
  constructor(public nomeBanco:string, public agencia:number ){
  }
    consultarBanco(nomeBanco:string, agencia:number){
    console.log(`PARABENS | Sua nova conta foi criada no ${this.nomeBanco} e ${this.agencia}`)
  }

  vallidaBanco(){
    if(this.nomeBanco == null || this.agencia == null){
      console.log("ESCOLHA A O BANCO! ")
    }else{
      console.log("SUA CONTA FOI CRIADA!")
    }
  }
}

export {Banco}
