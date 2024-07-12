import { Produtos } from "./produtos";
export class Eletronico implements Produtos {
  tipo: string;
  preco: number;
  nome: string;
  peso: number;
  marca: string;
  constructor(
    tipo: string,
    preco: number,
    nome: string,
    peso: number,
    marca: string
  ) {
    this.tipo = tipo;
    this.preco = preco;
    this.nome = nome;
    this.peso = peso;
    this.marca = marca;
  }
  calcularValorTotal(quantidade:number):number{
    return this.preco * quantidade
  }
}
