USE desafiohenrique;
CREATE TABLE Produtos
(
    ID INT AUTO_INCREMENT
    Nome VARCHAR(50)
    Categoria VARCHAR(50)
    Preco FLOAT
);
ALTER TABLE Produtos ADD Estoque INT NOT NULL;