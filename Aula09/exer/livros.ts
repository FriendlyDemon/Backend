import { Produtos } from "./produtos";
export class Livros implements Produtos {
  tipo: string;
  preco: number;
  nome: string;
  peso: number;
  autor: string;
  constructor(
    tipo: string,
    preco: number,
    nome: string,
    peso: number,
    autor: string
  ) {
    this.tipo = tipo;
    this.preco = preco;
    this.nome = nome;
    this.peso = peso;
    this.autor = autor;
  }
  addToCart() {
    throw new Error("Method not implemented.");
  }
}
