USE ti3k5791_henriquemichel;
CREATE TABLE Clientes 
( 
 id_clientes INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(100) NOT NULL,  
 e_mail VARCHAR(100) NOT NULL,  
 telephone VARCHAR(20) NOT NULL,  
 endereco VARCHAR(100),  
 UNIQUE (e_mail)
); 

CREATE TABLE Produtos 
( 
 id_produtos INT PRIMARY KEY AUTO_INCREMENT,  
 idCategoria INT,  
 nome VARCHAR(100) NOT NULL,  
 preco FLOAT NOT NULL,  
 estoque INT NOT NULL  
); 

CREATE TABLE Categoria 
( 
 id_categoria INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(100) NOT NULL  
); 

CREATE TABLE Pedidos 
( 
 id_pedidos INT PRIMARY KEY AUTO_INCREMENT,  
 idclientes INT,  
 data VARCHAR(20) NOT NULL , 
 total FLOAT NOT NULL 
); 

CREATE TABLE Pedido_Items 
( 
 id_pedido_itens INT PRIMARY KEY AUTO_INCREMENT,  
 idprodutos INT,  
 idpedidos INT,  
 quantidade INT NOT NULL  
); 

-- ALTER TABLE Produtos ADD FOREIGN KEY(idcategoria) REFERENCES Categoria (idcategoria);
-- ALTER TABLE Pedidos ADD FOREIGN KEY(idclientes) REFERENCES Clientes (idclientes);
-- ALTER TABLE Pedido_Items ADD FOREIGN KEY(idprodutos) REFERENCES Produtos (idprodutos);
-- ALTER TABLE Pedido_Items ADD FOREIGN KEY(idpedidos) REFERENCES Pedidos (idpedidos);

-- * = ALL
-- USE 'nome da database';
-- CREATE TABLE IF NOT EXIST;
-- ALTER TABLE "x" ADD "y" INT NOT NULL;
-- ALTER TABLE "x" CHANGE COLUMN "y" "z" VARCHAR(100);
-- ALTER TABLE "x" DROP COLUMN "y";
-- ALTER TABLE "x" RENAME TO "y";
-- DROP TABLE "x";
-- DELETE FROM "x" WHERE idclientes = "y";

-- INSERT INTO Clientes (id_clientes,nome,e_mail,telephone) VALUES (1,'joão silva','joaosilva@email.com',51999999999);
-- INSERT IGNORE INTO;
-- "id_clientes" não é necessário, por ser incremental;

-- UPDATE Clientes SET e_mail = 'novo.email@email.com' WHERE id_clientes = 1;
-- SEMPRE usar 'WHERE' para especificar qual mudar
-- Select e_mail FROM Cliente WHERE ide_clientes = 1;
-- ORDER BY nome ASC/DESC;
-- SELECT "x" AS "y", "a" AS "b" FROM "z"; mostra coluna "x" da tabela "z" nomeada como "y", e "a" como "b"
-- LIMIT "x"; limita output para "x" linhas
-- SELECT DISTINCT "x" FROM "y"; mostra todos of "x" distintos em "y"
-- SELECT SUM(total) FROM Pedidos; mosta a soma de todos os valores da coluna "total"
-- SELECT AVG(total) FROM Pedidos; mostra a média dos valores de "total"

-- SELECT Clientes.id_clientes,Clientes.nome,Clientes.e_mail,Pedidos.numeropedido
-- FROM Clientes
-- INNER/LEFT JOIN Pedidos ON Clientes.id_clientes=Pediros.idclientes
-- WHERE Pedidos.total>200
-- GROUP BY id_cliente;

-- SELECT COUNT(*) FROM Pedidos; mostra quantas vezes (*) aparece em Pedidos

-- SELECT Clientes.id_clientes, Clientes.nome, Clientes.e_mail, COUNT(Pedidos.numeropedido) AS compras,SUM(Pedidos.total) AS gastos
-- FROM Clientes
-- JOIN Pedidos ON Clientes.id_clientes=Pedidos.idclientes
-- GROUP BY id_clientes;

--default 'x'; // se não tiver entrada, mostra x
