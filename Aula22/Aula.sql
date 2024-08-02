USE empresahm;
DELIMITER //
CREATE FUNCTION CalcularSalarioBruto(
    emp_id INT
)
RETURNS DECIMAL(10,2)
BEGIN
    DECLARE salario1 DECIMAL(10,2);
    
    SELECT cargos.salario
    INTO salario1
    FROM empregados
    JOIN cargos on (empregados.titulo, empregados.departamento_id) = (cargos.titulo,cargos.departamento_id)
    WHERE empregados.empregados_id = emp_id;
    RETURN salario1;
END //
DELIMITER ;

-- 1

DELIMITER //
CREATE FUNCTION CalcularSalarioAnual(
    cargo_id INT
)
RETURNS DECIMAL(10,2)
BEGIN
    DECLARE salario1 DECIMAL(10,2);
    
    SELECT salario * 12
    INTO salario1
    FROM cargos
    WHERE cargos_id = cargo_id;
    RETURN salario1;
END //
DELIMITER ;

-- 2

DELIMITER //
CREATE FUNCTION CalcularEmpregadosDepartamento(
    dep_id INT
)
RETURNS INT
BEGIN
    DECLARE departamento1 INT;
    
    SELECT count(departamento_id)
    INTO departamento1
    FROM empregados
    WHERE departamento_id = dep_id;
    RETURN departamento1;
END //
DELIMITER ;

-- 3

DELIMITER //
CREATE FUNCTION NomeDepartamento(
    dep_id INT
)
RETURNS VARCHAR(20)
BEGIN
    DECLARE depnome1 VARCHAR(20);
    
    SELECT nome
    INTO depnome1
    FROM departamentos
    WHERE departamento_id = dep_id;
    RETURN depnome1;
END //
DELIMITER ;

-- 4

DELIMITER //
CREATE FUNCTION TituloEmpregado(
    emp_id INT
)
RETURNS VARCHAR(20)
BEGIN
    DECLARE cargonome VARCHAR(20);
    
    SELECT titulo
    INTO cargonome
    FROM empregados
    WHERE empregados_id = emp_id;
    RETURN cargonome;
END //
DELIMITER ;

--5

DELIMITER //
CREATE FUNCTION SalarioDep(
    dep_id INT
)
RETURNS DECIMAL(10,2)
BEGIN
    DECLARE salariodep DECIMAL(10,2);
    
    SELECT SUM(salario)
    INTO salariodep
    FROM cargos
    WHERE departamento_id = dep_id;
    RETURN salariodep;
END //
DELIMITER ;