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
var person_1 = require("./person");
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Father.prototype.falar = function () {
        this.howManyChildren();
        console.log("This is the father.");
    };
    return Father;
}(person_1.Person));
var pai = new person_1.Person(4);
//pai.howManyChildren();
var novoPai = new Father(3);
novoPai.falar();
