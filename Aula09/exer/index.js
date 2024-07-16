"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrinhoN = exports.carrinhoC = exports.carrinhoP = void 0;
exports.verCarrinho = verCarrinho;
var frutas_1 = require("./frutas");
var livros_1 = require("./livros");
var eletronico_1 = require("./eletronico");
var cartao_1 = require("./cartao");
var dinheiro_1 = require("./dinheiro");
var pix_1 = require("./pix");
var rd = require("readline-sync");
var open = true;
var carrinhoP = [], carrinhoC = [], carrinhoN = [], menuA = ["Comprar", "Ver Carrinho", "Pagar"], menuB = ["comprar", "verCarrinho", "pagarFun"];
exports.carrinhoP = carrinhoP;
exports.carrinhoC = carrinhoC;
exports.carrinhoN = carrinhoN;
function info(produto) {
    var info1 = estoque[produto][0]["nome"];
    var info2 = estoque[produto][0]["preco"].toFixed(2);
    return "".concat(info1, "  R$").concat(info2);
}
;
function estoqueLista() {
    for (var i = 0, a = new Array; i <= estoque.length; i++) {
        if (i != estoque.length) {
            a.push(info(i));
        }
        else if (i == estoque.length) {
            return a;
        }
    }
}
;
function pagamentoLista() {
    for (var i = 0, a = new Array; i <= pagamento.length; i++) {
        if (i != pagamento.length) {
            a.push(pagamento[i]["nome"]);
        }
        else if (i == pagamento.length) {
            return a;
        }
    }
}
;
function estoqueQuantia(produto, quantidade) {
    for (var i = 0; i < estoque.length; i++) {
        if (estoque[i][0]["nome"] == produto) {
            estoque[i][1] -= quantidade;
        }
    }
}
;
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
;
function comprar() {
    var produto = rd.keyInSelect(estoqueLista(), "O que voce gostaria de comprar?   "), quantidade = Number(rd.questionInt("Temos ".concat(estoque[produto][1], " em estoque, quantos voce gostaria de comprar? "))), preco = estoque[produto][0]["preco"].toFixed(2);
    if (quantidade > Number(estoque[produto][1])) {
        console.log("Erro. Não pode comprar mais do que temos em estoque.");
    }
    else {
        addCarrinho(estoque[produto][0]["nome"], quantidade, preco);
    }
}
;
function verCarrinho() {
    for (var i = 0, total = 0; i <= carrinhoP.length; i++) {
        if (i != carrinhoP.length) {
            total += carrinhoC[i] * carrinhoN[i];
            console.log("".concat(carrinhoP[i], ", R$").concat(carrinhoC[i], " x ").concat(carrinhoN[i], " = R$").concat((carrinhoC[i] * carrinhoN[i]).toFixed(2)));
        }
        else {
            console.log("Total = R$" + total.toFixed(2));
        }
    }
}
;
function pagarFun() {
    verCarrinho();
    var Mpagamento = rd.keyInSelect(pagamentoLista(), "Como gostaria de pagar?");
    pagamento[Mpagamento].pagar();
}
;
function menu() {
    var select = Number(rd.keyInSelect(menuA, "O que voce gostaria de fazer? "));
    if (select >= 0) {
        eval(menuB[select])();
    }
    else {
        open = false;
    }
}
;
var bananaCaturra = new frutas_1.Frutas("banana", 1.5, "Banana Caturra", 100, 7), fahrenheit451 = new livros_1.Livros("romance/scifi", 20, "Fahrenheit 451", 1000, "Ray Bradbury"), nokia1220 = new eletronico_1.Eletronico("celular", 200, "Nokia 1220", 150, "Nokia");
var debito = new cartao_1.Cartao("cartao de debito"), credito = new cartao_1.Cartao("cartao de credito"), dinheiro = new dinheiro_1.Dinheiro("dinheiro"), pix = new pix_1.Pix("pix");
var estoque = [[bananaCaturra, 20], [fahrenheit451, 10], [nokia1220, 5]];
var pagamento = [debito, credito, dinheiro, pix];
while (open == true) {
    menu();
}
