import { Produtos } from "./produtos";
export class Frutas implements Produtos {
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
  valorTotal(quantidade: number): number {
    return this.preco * quantidade
  }
}
