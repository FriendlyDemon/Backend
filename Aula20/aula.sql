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

--use empresahm;
insert into departamentos (nome) values
('Vendas'),
('Marketing'),
('TI'),
('RH');

--use empresahm;
insert into empregados (nome,salario,departamento_id) values
('Maicon Diécson',5000.00,1),
('Vandercleison',6000.00,1),
('Kerolaine',4000.00,2),
('Wanderneidson',5500.00,3),
('Kellen',7000.00,3),
('Chico',3000.00,4),
('Greice Kelly',4500.00,2),
('Xonas',3500.00,1);

-- sub consulta
--use empresahm;
select nome,salario
from empregados
where salario>(select avg(salario) from empregados);
--

--use empresahm;
update departamentos set localizacao = 'São Paulo' where nome = 'Vendas';
update departamentos set localizacao = 'Rio de Janeiro' where nome = 'Marketing';
update departamentos set localizacao = 'São Paulo' where nome = 'TI';
update departamentos set localizacao = 'Belo Horizonte' where nome = 'RH';

--
--use empresahm;

alter table empregados 
drop salario,
add titulo varchar(20);

create table cargos(
cargos_id int auto_increment primary key,
titulo varchar(50) not null,
departamento_id int,
salario decimal(10,2) not null,
    foreign key(departamento_id) references departamentos(departamento_id));

update empregados set titulo = 'Gerente' where nome = 'Maicon Diécson';
update empregados set titulo = 'Assistente' where nome = 'Vandercleison';
update empregados set titulo = 'Analista' where nome = 'Kerolaine';
update empregados set titulo = 'Desenvolvedor' where nome = 'Wanderneidson';
update empregados set titulo = 'Engenheiro' where nome = 'Kellen';
update empregados set titulo = 'Assistente' where nome = 'Chico';
update empregados set titulo = 'Analista' where nome = 'Greice Kelly';
update empregados set titulo = 'Estagiário' where nome = 'Xonas';

insert into cargos (titulo,departamento_id,salario) values
('Gerente',1,8000.00),
('Assistente',1,4000.00),
('Analista',2,4500.00),
('Desenvolvedor',3,6000.00),
('Engenheiro',3,7000.00),
('Assistente',4,3500.00),
('Analista',2,4600.00),
('Estagiário',1,2000);

select nome from empregados where (departamento_id,titulo) in (select departamento_id,titulo from cargos where salario > 5000);

-- use empresahm;
-- select departamentos.nome, count(empregados.departamento_id) as num_empregados
-- from departamentos
-- join empregados on departamentos.departamento_id=empregados.departamento_id
-- group by departamentos.nome
-- having count(empregados.departamento_id)>1