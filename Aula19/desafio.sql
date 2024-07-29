USE ti3k5791_henriquemichel;
CREATE TABLE carros_aluguel(
    placa CHAR(7) PRIMARY KEY NOT NULL,
    marca VARCHAR(20) NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    cor VARCHAR (20) NOT NULL,
    ano INT(4) NOT NULL,
    precoDia FLOAT NOT NULL
);
CREATE TABLE clientes(
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    dataInscricao DATE NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL
);
CREATE TABLE alugueis_carros(
    idAluguel INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT NOT NULL,
    placa char(7) NOT NULL,
    dataAluguel DATE NOT NULL,
    tempoAluguel DATE,
    FOREIGN KEY (placa) REFERENCES carros_aluguel(placa),
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente)
);
INSERT INTO carros_aluguel (placa,marca,modelo,cor,ano,precoDia) VALUES
('abc1234','VW','fusca','azul',1970,50),
('abc1235','Ford','coupê 47','preto',1950,45),
('abc1236','Ford','focus','cinza',1980,55),
('abc1237','Cameron','gepeto','branco',1990,60),
('abc1238','hotwheels','marquinhos','vermelho',2006,77),
('abc1239','VW','fusca','preto',1981,80),
('abc1240','Cadillac','coyote','branco',1964,85),
('abc1241','chevrolet','coupe','azul',1933,84),
('abc1242','VW','brasilia','amarelo',1979,79),
('abc1243','the Munsters','dragula','preto',1998,79);
INSERT INTO clientes (nome,dataInscricao,telefone,email) VALUES
('carlos','2011-08-16',51998877665,'carlosjs@gmail.com'),
('jeromel','2016-10-21',51987654321,'jeronimo@hotmail.com'),
('silvio','1999-05-02',1130351568,'silvio@santos.com.br'),
('marcos','2019-12-08',66884466552,'marcoveio@tacalepau.com'),
('renato','1985-06-12',2187542169,'russo@aol.com');
INSERT INTO alugueis_carros (idCliente,placa,dataAluguel,tempoAluguel) VALUES 
(1,'abc1240','2011-11-09',40),
(1,'abc1241','2012-11-12',35),
(1,'abc1240','2013-12-01',33),
(1,'abc1239','2014-11-28',2),
(1,'abc1241','2014-12-01',35),
(1,'abc1240','2015-11-22',40),
(2,'abc1234','2016-02-01',29),
(2,'abc1235','2017-02-01',28),
(2,'abc1236','2018-02-01',28),
(2,'abc1237','2019-02-01',28),
(2,'abc1243','2020-02-01',29),
(2,'abc1243','2021-02-01',28),
(3,'abc1239','2006-06-01',61),
(3,'abc1239','2007-06-01',61),
(3,'abc1239','2008-06-01',61),
(3,'abc1239','2009-06-01',61),
(4,'abc1238','2006-03-01',70),
(4,'abc1238','2007-03-02',70),
(4,'abc1238','2008-03-01',70),
(4,'abc1238','2009-03-01',70),
(5,'abc1242','1985-01-01',60),
(5,'abc1242','1985-04-02',60),
(5,'abc1242','1985-07-01',60),
(5,'abc1242','1986-01-01',70);
--
USE ti3k5791_henriquemichel;
SELECT clientes.idCliente AS ID, clientes.nome AS Cliente, carros_aluguel.placa, SUM(alugueis_carros.tempoAluguel) * carros_aluguel.precoDia AS Gasto_Total
FROM clientes 
JOIN alugueis_carros ON clientes.idCliente = alugueis_carros.idCliente
JOIN carros_aluguel ON alugueis_carros.placa = carros_aluguel.placa
GROUP BY ID,placa;