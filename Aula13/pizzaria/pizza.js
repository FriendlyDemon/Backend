"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
    Pizza.prototype.pizza = function () { return "Pizza ".concat(this.sabor, ", Tamanho ").concat(this.tamanho, ", Pre\u00E7o ").concat(this.preco); };
    return Pizza;
}());
exports.Pizza = Pizza;
