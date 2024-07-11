interface Car {
  model: string;
  year: number;
  color: string;
  startEngine(): void;
}
// não se usa lógica em interface
class Toyota implements Car {
  model: string;
  year: number;
  color: string;
  startEngine(): void {}
}

class Ford implements Car{
    model: string;
    year: number;
    color: string;
    startEngine(): void {}
}
// crie uma interface chamada Produtos que tenha os atributos [tipo, preco, nome, peso]
// crie pelo menos um metodo obrigatorio na interface
// crie tres classes que utilizem esta interface. crie um metodo diferente para cada produto
// instancie as classes no index.ts e chame estes metodos e atributos