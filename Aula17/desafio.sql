USE desafiohenrique;
CREATE TABLE Produtos
(
    ID INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Categoria VARCHAR(50) NOT NULL,
    Preco FLOAT NOT NULL,
    Validade DATE,
    Cor VARCHAR(20),
    Tamanho VARCHAR(20),
    Marca VARCHAR(20)
);
INSERT INTO Produtos (Nome,Categoria,Preco,Validade,Cor,Tamanho,Marca) VALUES
('banana','alimentos',1,'2024-08-02',NULL,NULL,NULL),
('arroz','alimentos',5,'2025-12-31',NULL,'1kg','tio ben'),
('blusa','roupas',55,NULL,'preta','M','Vila'),
('jeans','roupas',50,NULL,'azul','M','Vila'),
('IPhone','eletrônicos',1000,NULL,'branco',NULL,'Apple'),
('Nokia 1220','eletrônicos',200,NULL,'azul',NULL,'NOKIA'),
('mesa','mobília',250,NULL,'marrom','150x100x80','Formigaz'),
('cruz','mobília',5,NULL,'cinza','10x3','INRI'),
('agua sanitária','limpeza',12,NULL,NULL,'2L','qboa'),
('desinfetante','limpeza',7,NULL,NULL,'200ml','ajax');

DELETE FROM Produtos WHERE ID = 4 OR ID = 7;

ALTER TABLE Produtos ADD SemEstoque boolean;

UPDATE Produtos SET SemEstoque = true WHERE ID!=2;

SELECT * FROM Produtos WHERE SemEstoque = true ORDER BY ID ASC LIMIT 5;