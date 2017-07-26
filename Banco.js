"use strict";
exports.__esModule = true;
var Banco = (function () {
    function Banco(nomeBanco, agencia) {
        this.nomeBanco = nomeBanco;
        this.agencia = agencia;
    }
    Banco.prototype.consultarBanco = function (nomeBanco, agencia) {
        console.log("PARABENS | Sua nova conta foi criada no " + this.nomeBanco + " e " + this.agencia);
    };
    Banco.prototype.vallidaBanco = function () {
        if (this.nomeBanco == null || this.agencia == null) {
            console.log("ESCOLHA A O BANCO! ");
        }
        else {
            console.log("SUA CONTA FOI CRIADA!");
        }
    };
    return Banco;
}());
exports.Banco = Banco;
