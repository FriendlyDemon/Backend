"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(_marca, _velocidadeM, _cor) {
        this.marca = _marca;
        this.velocidadeM = _velocidadeM;
        this.cor = _cor;
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
