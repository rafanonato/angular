"use strict";
exports.__esModule = true;
var Banco_1 = require("./Banco");
var Usuario_1 = require("./Usuario");
var novoBanco = new Banco_1.Banco("Bradesco", 2045, 10);
novoBanco.validaBanco();
novoBanco.criarTitulo();
//novoBanco.consultarBanco()
//novoBanco.verificaConta()
var novoUsuario = new Usuario_1.Usuario("Rafael Nonato", 333.222);
//novoUsuario.cadastrarUsuario()
