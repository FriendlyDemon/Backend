USE ti3k5791_henriquemichel;
CREATE TABLE clientes 
( 
 id_clientes INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 nome VARCHAR(n) NOT NULL,  
 e_mail INT NOT NULL,  
 telephone VARCHAR(n) NOT NULL,  
 endereco VARCHAR(n),  
 UNIQUE (id_Clientes,E_mail)
); 

CREATE TABLE produtos 
( 
 id_produtos INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 idcategoria INT,  
 nome VARCHAR(n) NOT NULL,  
 preco FLOAT NOT NULL,  
 estoque INT NOT NULL,  
 UNIQUE (id_produtos)
); 

CREATE TABLE categoria 
( 
 id_categoria INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 nome VARCHAR(n) NOT NULL,  
 UNIQUE (id_categoria)
); 

CREATE TABLE pedidos 
( 
 id_pedidos INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 idclientes INT,  
 data VARCHAR(n) NOT NULL,  
 total FLOAT NOT NULL,  
 UNIQUE (id_pedidos)
); 

CREATE TABLE pedido_items 
( 
 id_pedido_itens INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 idprodutos INT,  
 idpedidos INT,  
 quantidade INT NOT NULL,  
 UNIQUE (id_pedido_itens)
); 

ALTER TABLE produtos ADD FOREIGN KEY(idcategoria) REFERENCES categoria (idcategoria);
ALTER TABLE pedidos ADD FOREIGN KEY(idClientes) REFERENCES Clientes (idClientes);
ALTER TABLE pedido_items ADD FOREIGN KEY(idprodutos) REFERENCES produtos (idprodutos);
ALTER TABLE pedido_items ADD FOREIGN KEY(idpedidos) REFERENCES pedidos (idpedidos);
