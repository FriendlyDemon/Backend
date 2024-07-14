"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frutas = void 0;
var Frutas = /** @class */ (function () {
    function Frutas(tipo, preco, nome, peso, validade) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
        this.validade = validade;
    }
    Frutas.prototype.calcularValorTotal = function (quantidade) {
        return this.preco * quantidade;
    };
    return Frutas;
}());
exports.Frutas = Frutas;
