export interface Produtos {
  tipo: string;
  preco: number;
  nome: string;
  peso: number;
  valorTotal(quantidade?: number): number;
}
