DELIMITER //

CREATE PROCEDURE TransferirEmpregado(
    IN emp_id INT,
    IN novo_departamento_id INT
)
BEGIN
    DECLARE dep_existe INT;

    -- Verifica se o novo departamento existe na tabela departamentos
    SELECT COUNT(*)
    INTO dep_existe
    FROM departamentos
    WHERE departamento_id = novo_departamento_id;

    -- Se o departamento existe, executa a transferência
    IF dep_existe > 0 THEN
        -- Atualiza o departamento do empregado
        UPDATE empregados
        SET departamento_id = novo_departamento_id
        WHERE departamento_id = emp_id;
    ELSE
        -- Se o departamento não existe, lança um erro
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'O departamento fornecido não existe';
    END IF;
END //

DELIMITER ;