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