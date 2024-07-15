"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dinheiro = void 0;
var index_1 = require("./index");
var rd = require("readline-sync");
var Dinheiro = /** @class */ (function () {
    function Dinheiro(name) {
        this.nome = name;
    }
    Dinheiro.prototype.pagar = function () {
        rd.keyInYN("Pague o caixa");
        index_1.carrinhoP.length = 0, index_1.carrinhoC.length = 0, index_1.carrinhoN.length = 0;
    };
    return Dinheiro;
}());
exports.Dinheiro = Dinheiro;
