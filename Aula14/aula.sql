CREATE TABLE Clientes 
( 
 ID_Clientes INT NOT NULL,  
 Nome VARCHAR(n) NOT NULL,  
 E_mail INT NOT NULL,  
 Telephone VARCHAR(n) NOT NULL,  
 Endereco VARCHAR(n),  
 UNIQUE (ID_Clientes,E_mail)
); 

CREATE TABLE Produtos 
( 
 ID_Produtos INT NOT NULL,  
 idCategoria INT,  
 Nome VARCHAR(n) NOT NULL,  
 Preco FLOAT NOT NULL,  
 Estoque INT NOT NULL,  
 UNIQUE (ID_Produtos)
); 

CREATE TABLE Categoria 
( 
 ID_Categoria INT NOT NULL,  
 Nome VARCHAR(n) NOT NULL,  
 UNIQUE (ID_Categoria)
); 

CREATE TABLE Pedidos 
( 
 ID_Pedidos INT NOT NULL,  
 idClientes INT,  
 Data VARCHAR(n) NOT NULL,  
 total FLOAT NOT NULL,  
 UNIQUE (ID_Pedidos)
); 

CREATE TABLE Pedido_Items 
( 
 ID_Pedido_Itens INT NOT NULL,  
 idProdutos INT,  
 idPedidos INT,  
 Quantidade INT NOT NULL,  
 UNIQUE (ID_Pedido_Itens)
); 

ALTER TABLE Produtos ADD FOREIGN KEY(idCategoria) REFERENCES Categoria (idCategoria)
ALTER TABLE Pedidos ADD FOREIGN KEY(idClientes) REFERENCES Clientes (idClientes)
ALTER TABLE Pedido_Items ADD FOREIGN KEY(idProdutos) REFERENCES Produtos (idProdutos)
ALTER TABLE Pedido_Items ADD FOREIGN KEY(idPedidos) REFERENCES Pedidos (idPedidos)
