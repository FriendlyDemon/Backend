"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartao = void 0;
var index_1 = require("./index");
var rd = require("readline-sync");
var Cartao = /** @class */ (function () {
    function Cartao(name) {
        this.nome = name;
    }
    Cartao.prototype.pagar = function () {
        rd.keyInYN("Insira o cartao");
        index_1.carrinhoP.length = 0, index_1.carrinhoC.length = 0, index_1.carrinhoN.length = 0;
    };
    return Cartao;
}());
exports.Cartao = Cartao;
