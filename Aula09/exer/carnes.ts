import { Produtos } from "./produtos";
export class Carnes implements Produtos {
  tipo: string;
  preco: number;
  nome: string;
  peso: number;
  validade: number;
  constructor(
    tipo: string,
    preco: number,
    nome: string,
    peso: number,
    validade: number
  ) {
    this.tipo = tipo;
    this.preco = preco;
    this.nome = nome;
    this.peso = peso;
    this.validade = validade;
  }
  addToCart() {
    throw new Error("Method not implemented.");
  }
}
