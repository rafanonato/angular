"use strict";
exports.__esModule = true;
var Banco = (function () {
    function Banco(nomeBanco, agencia, tipoC) {
        this.nomeBanco = nomeBanco;
        this.agencia = agencia;
        this.tipoC = tipoC;
    }
    Banco.prototype.consultarBanco = function (nomeBanco, agencia, tipoC) {
        console.log("PARABENS | Sua nova conta foi criada no " + this.nomeBanco + " e " + this.agencia + " o tipo da sua conta \u00E9 " + this.tipoC);
    };
    Banco.prototype.validaBanco = function () {
        if (this.nomeBanco == null || this.agencia == null) {
            console.log("ESCOLHA A O BANCO! ");
        }
        else {
            console.log("SUA CONTA FOI CRIADA!");
        }
    };
    Banco.prototype.verificaConta = function (tipo) {
        var tipoConta = 10;
        if (tipoConta == Math.random()) {
            console.log("Sua conta é Corrente");
        }
        else {
            console.log("Sua conta é Universitaria");
        }
    };
    return Banco;
}());
exports.Banco = Banco;
