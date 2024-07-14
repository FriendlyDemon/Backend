"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartao = void 0;
var index_1 = require("./index");
var rd = require("readline-sync");
var Cartao = /** @class */ (function () {
    function Cartao() {
    }
    Cartao.prototype.pagar = function () {
        rd.keyInYN("O seu total é R$", index_1.carrinho, ", gostaria de pagar com", this.nome + "?");
    };
    return Cartao;
}());
exports.Cartao = Cartao;
