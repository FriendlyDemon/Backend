"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrinhoN = exports.carrinhoC = exports.carrinhoP = void 0;
exports.verCarrinho = verCarrinho;
var frutas_1 = require("./frutas");
var livros_1 = require("./livros");
var eletronico_1 = require("./eletronico");
var rd = require("readline-sync");
var open = true;
var carrinhoP = [];
exports.carrinhoP = carrinhoP;
var carrinhoC = [];
exports.carrinhoC = carrinhoC;
var carrinhoN = [];
exports.carrinhoN = carrinhoN;
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
function estoqueQuantia(produto, quantidade) {
    for (var i = 0; i < estoque.length; i++) {
        if (estoque[i][0]["nome"] == produto) {
            estoque[i][1] -= quantidade;
        }
    }
}
function addCarrinho(produto, quantidade, preco) {
    if (carrinhoP.includes(produto)) {
        var indexCarrinho = carrinhoP.indexOf(produto);
        carrinhoN[indexCarrinho] += quantidade;
        estoqueQuantia(produto, quantidade);
    }
    else {
        carrinhoP.push(produto);
        carrinhoC.push(preco);
        carrinhoN.push(quantidade);
        estoqueQuantia(produto, quantidade);
    }
}
function comprar() {
    var produto = rd.keyInSelect(estoqueLista(), "O que voce gostaria de comprar?   "), quantidade = Number(rd.questionInt("Temos ".concat(estoque[produto][1], " em estoque, quantos voce gostaria de comprar? "))), preco = estoque[produto][0]["preco"];
    if (quantidade > Number(estoque[produto][1])) {
        console.log("Erro. Não pode comprar mais do que temos em estoque.");
    }
    else {
        addCarrinho(estoque[produto][0]["nome"], quantidade, preco);
    }
}
function verCarrinho() {
    for (var i = 0, total = 0; i <= carrinhoP.length; i++) {
        if (i != carrinhoP.length) {
            total += carrinhoC[i] * carrinhoN[i];
            console.log("".concat(carrinhoP[i], ", R$").concat(carrinhoC[i], " x ").concat(carrinhoN[i], " = ").concat(carrinhoC[i] * carrinhoN[i]));
        }
        else {
            console.log("Total=" + total);
        }
    }
}
function menu() {
    var select = Number(rd.keyInSelect(menuA, "O que voce gostaria de fazer? "));
    if (select >= 0) {
        eval(menuB[select])();
    }
    else {
        open = false;
    }
}
var menuA = ["Comprar", "Ver Carrinho", "Pagar"];
var menuB = ["comprar", "verCarrinho", "pagar"];
var bananaCaturra = new frutas_1.Frutas("banana", 1.5, "Banana Caturra", 100, 7);
var fahrenheit451 = new livros_1.Livros("romance/scifi", 20, "Fahrenheit 451", 1000, "Ray Bradbury");
var nokia1220 = new eletronico_1.Eletronico("celular", 200, "Nokia 1220", 150, "Nokia");
var estoque = [[bananaCaturra, 20], [fahrenheit451, 10], [nokia1220, 5]];
while (open == true) {
    if (carrinhoP == undefined) {
        comprar();
    }
    else {
        menu();
    }
}
