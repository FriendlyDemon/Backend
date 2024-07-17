"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sabor_1 = require("./sabor");
var tamanho_1 = require("./tamanho");
var pizza_1 = require("./pizza");
var portuguesa = new pizza_1.Pizza(sabor_1.SaborPizza.portuguesa, tamanho_1.TamanhoPizza.m, 50);
console.log(portuguesa.pizza());
