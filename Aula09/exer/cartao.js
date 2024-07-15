"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartao = void 0;
var index_1 = require("./index");
var rd = require("readline-sync");
var total;
for (var i = 0, t = 0; i <= index_1.carrinhoN.length; i++) {
    if (i != index_1.carrinhoN.length) {
        t += index_1.carrinhoC[i] * index_1.carrinhoN[i];
    }
    else {
        var total_1 = t;
    }
}
index_1.verCarrinho;
var Cartao = /** @class */ (function () {
    function Cartao() {
    }
    Cartao.prototype.pagar = function () {
        rd.keyInYN("O seu total \u00E9 R$".concat(total, " gostaria de pagar com ").concat(this.nome, "? "));
    };
    return Cartao;
}());
exports.Cartao = Cartao;
