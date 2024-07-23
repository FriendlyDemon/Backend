USE livrariahenrique;
CREATE TABLE Autores
(
    AutorID INT PRIMARY KEY AUTO_INCREMENT,
    Nacionalidade VARCHAR(20) NOT NULL,
    Nome VARCHAR(50) NOT NULL
);
CREATE TABLE Clientes
(
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL,
    Endereco VARCHAR(50) NOT NULL,
    Telefone VARCHAR(20) NOT NULL,
);
CREATE TABLE Livros
(
    LivroID INT PRIMARY KEY AUTO_INCREMENT,
    Titulo VARCHAR(50) NOT NULL,
    Genero VARCHAR(50) NOT NULL,
    AnoPublicacao YEAR NOT NULL,
    AutorID INT NOT NULL
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);
CREATE TABLE Emprestimos
(
    EmprestimoID INT PRIMARY KEY AUTO_INCREMENT,
    LivroID INT NOT NULL,
    ClienteID INT NOT NULL,
    DataEmprestimo DATE NOT NULL,
    DataDevolucao DATE NOT NULL,
    FOREIGN KEY (LivroID) REFERENCES Livros(LivroID)
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);
//
USE livrariahenrique;
INSERT INTO Autores (Nome,Nacionalidade) VALUES ("Pelé","Brasil"),("Maradonna","Argentina"),("Cristiano","Portugal");
INSERT INTO Livros (Titulo,Genero,AutorID,AnoPublicacao) VALUES ("como fazer gols","esportes",1,1998),("como cheirar pó","DIY",2,1996),("porto","autobiografia",3,2022);
INSERT INTO Clientes (Nome,Telefone,Endereco) VALUES ("Gustavo",35886644,"Camélias"),("Hermanoteu",35795566,"Centro");
//
USE livrariahenrique;
ALTER TABLE 