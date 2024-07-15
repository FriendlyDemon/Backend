"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pix = void 0;
var index_1 = require("./index");
var rd = require("readline-sync");
var Pix = /** @class */ (function () {
    function Pix(name) {
        this.nome = name;
    }
    Pix.prototype.pagar = function () {
        rd.keyInYN("chave pix : tabajara@gmail.com");
        index_1.carrinhoP.length = 0, index_1.carrinhoC.length = 0, index_1.carrinhoN.length = 0;
    };
    return Pix;
}());
exports.Pix = Pix;
