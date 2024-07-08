"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(x1, x2, x3) {
        this.marca = x1;
        this.velocidadeM = x2;
        this.cor = x3;
    }
    Carro.prototype.horn = function () {
        console.log("O carro", this.marca, "bozina");
    };
    Carro.prototype.speed = function () {
        console.log("A velocidade máxima do caro", this.marca, "é", this.velocidadeM);
    };
    Carro.prototype.color = function () {
        console.log("a cor do carro é", this.cor);
    };
    return Carro;
}());
exports.Carro = Carro;
