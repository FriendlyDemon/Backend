"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livros = void 0;
var Livros = /** @class */ (function () {
    function Livros(tipo, preco, nome, peso, autor) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
        this.autor = autor;
    }
    Livros.prototype.calcularValorTotal = function (quantidade) {
        return this.preco * quantidade;
    };
    return Livros;
}());
exports.Livros = Livros;
