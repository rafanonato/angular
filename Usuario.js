"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Banco_1 = require("./Banco");
var Usuario = (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nome, cpf) {
        var _this = this;
        _this.nome = nome;
        _this.cpf = cpf;
        return _this;
    }
    Usuario.prototype.cadastrarUsuario = function (nome, cpf) {
        if (this.nome == null || this.cpf == null) {
            console.log("Voce n\u00E3o conseguiu inserir o nome ou cpf");
        }
        else {
            console.log("Parabens | " + this.nome + ", " + this.cpf);
        }
    };
    return Usuario;
}(Banco_1.Banco));
exports.Usuario = Usuario;
