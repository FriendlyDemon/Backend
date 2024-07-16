"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["Segunda"] = 0] = "Segunda";
    DiasDaSemana[DiasDaSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    DiasDaSemana[DiasDaSemana["Quarta"] = 2] = "Quarta";
    DiasDaSemana[DiasDaSemana["Quinta"] = 3] = "Quinta";
    DiasDaSemana[DiasDaSemana["Sexta"] = 4] = "Sexta";
    DiasDaSemana[DiasDaSemana["Sabado"] = 5] = "Sabado";
    DiasDaSemana[DiasDaSemana["Domingo"] = 6] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
for (var i in DiasDaSemana) {
    console.log(i);
}
var rd = require("readline-sync");
var hue = rd.questionInt("diga um número");
console.log(hue, hue.typeof);
