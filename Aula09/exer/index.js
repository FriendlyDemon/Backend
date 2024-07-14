"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrinho = void 0;
var frutas_1 = require("./frutas");
var livros_1 = require("./livros");
var eletronico_1 = require("./eletronico");
var rd = require("readline-sync");
var open = true;
var carrinho = new Array;
exports.carrinho = carrinho;
function info(produto) {
    var info1 = estoque[produto][0]["nome"];
    var info2 = estoque[produto][0]["preco"];
    return "".concat(info1, "  R$").concat(info2);
}
function estoqueLista() {
    for (var i = 0, a = new Array; i <= estoque.length; i++) {
        if (i != estoque.length) {
            a.push(info(i));
        }
        else {
            return a;
        }
    }
}
function addCarrinho(produto, quantidade) {
    if (carrinho.includes(estoque[produto][0]["nome"])) {
        quantidade += carrinho[estoque[produto][0]["nome"]];
    }
    else {
        carrinho.push(estoque[produto][0]["nome"] = quantidade);
    }
}
function comprar() {
    var produto = rd.keyInSelect(estoqueLista(), "O que voce gostaria de comprar? "), quantidade = rd.questionInt("Temos ".concat(estoque[produto][1], " em estoque, quantos voce gostaria de comprar? "));
    if (quantidade > estoque[produto][1]) {
        console.log("Erro. Não pode comprar mais do que temos em estoque.");
    }
    else {
        addCarrinho(produto, quantidade);
    }
}
function verCarrinho() { }
function menu() { }
var bananaCaturra = new frutas_1.Frutas("banana", 1.5, "Banana Caturra", 100, 7);
var fahrenheit451 = new livros_1.Livros("romance/scifi", 20, "Fahrenheit 451", 1000, "Ray Bradbury");
var nokia1220 = new eletronico_1.Eletronico("celular", 200, "Nokia 1220", 150, "Nokia");
var estoque = [[bananaCaturra, 20], [fahrenheit451, 10], [nokia1220, 5]];
while (open == true) {
    if (carrinho == undefined) {
        comprar();
    }
    else {
        menu();
    }
}
