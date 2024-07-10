"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.neto = void 0;
var filho_1 = require("./filho");
var neto = /** @class */ (function (_super) {
    __extends(neto, _super);
    function neto(nome, idade, escola, fome) {
        var _this = _super.call(this, nome, idade, escola) || this;
        _this.fome = fome;
        return _this;
    }
    neto.prototype.comer = function () {
        if (this.fome) {
            console.log(this.nome, "está com fome");
        }
        else {
            console.log(this.nome, "está cheio");
        }
    };
    return neto;
}(filho_1.filho));
exports.neto = neto;
