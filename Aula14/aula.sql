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
