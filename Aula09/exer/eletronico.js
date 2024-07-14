"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(tipo, preco, nome, peso, marca) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
        this.marca = marca;
    }
    Eletronico.prototype.calcularValorTotal = function (quantidade) {
        return this.preco * quantidade;
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
