use empresahm;
create table departamentos(
    departamento_id int auto_increment primary key,
    nome varchar(50) not null);
create table empregados(
    empregados_id int auto_increment primary key,
    nome varchar(50) not null,
    salario decimal(10,2) not null,
    departamento_id int,
    foreign key (departamento_id) references departamentos(departamento_id));

insert into departamentos (nome) values
('Vendas'),
('Marketing'),
('TI'),
('RH');

insert into empregados (nome,salario,departamento_id) values
('Maicon Diécson',5000.00,1),
('Vandercleison',6000.00,1),
('Kerolaine',4000.00,2),
('Wanderneidson',5500.00,3),
('Kellen',7000.00,3),
('Chico',3000.00,4),
('Greice Kelly',4500.00,2),
('Xonas',3500.00,1);