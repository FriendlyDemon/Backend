var Carro = /** @class */ (function () {
    function Carro(brand, color, power) {
        this.marca = brand;
        this.cor = color;
        this.potencia = power;
    }
    Carro.prototype.acelerar = function () {
        console.log("O carro da marca ".concat(this.marca, " est\u00E1 acelerando"));
    };
    Carro.prototype.buzinar = function () {
        console.log("O carro da cor ".concat(this.cor, " buzina"));
    };
    Carro.prototype.motor = function () {
        console.log("O motor do carro tem ".concat(this.potencia, "cv de pot\u00EAncia"));
    };
    return Carro;
}());
var meucarro = new Carro("VW", "preto", 500);
