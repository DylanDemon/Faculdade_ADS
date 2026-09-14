CREATE DATABASE IF NOT EXISTS Exercicio3;
USE  Exercicio3;
CREATE TABLE IF NOT EXISTS Usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(125) NOT NULL UNIQUE,
    contaAtiva BOOLEAN NOT NULL DEFAULT false,
    documentoValido BOOLEAN NOT NULL DEFAULT false
);
CREATE TABLE IF NOT EXISTS LOCALIZACAO(
    id INT PRIMARY KEY AUTO_INCREMENT,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL
);
CREATE TABLE IF NOT EXISTS CONTRATANTE(
    id_usuario INT NOT NULL UNIQUE,
    cpfCnpj VARCHAR(18) NOT NULL PRIMARY KEY,
    CONSTRAINT fk_Contratante_user
    Foreign Key (id_usuario) REFERENCES Usuario(id)
);
CREATE TABLE IF NOT EXISTS PRESTADOR(
    id_usuario INT NOT NULL UNIQUE,
    cpfCnpj VARCHAR(18) PRIMARY KEY NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    quantidadeServicosPrestados INT NULL DEFAULT 0,
    fotosDoTrabalho TEXT NULL,
    idLocal INT NOT NULL,

    CONSTRAINT fk_prestador_user
    Foreign Key (id_usuario) REFERENCES Usuario(id),
    CONSTRAINT fk_prestador_localizacao
    Foreign Key (idLocal) REFERENCES LOCALIZACAO(id)
);
CREATE TABLE IF NOT EXISTS CONTRATACAO(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Status ENUM('Ativo', 'Inativo') DEFAULT 'Ativo',
    cpfCnpjContratante VARCHAR(18) NOT NULL,
    cpfCnpjPrestador VARCHAR(18) NOT NULL,

    CONSTRAINT fk_cpf_contratante
    Foreign Key (cpfCnpjContratante) REFERENCES CONTRATANTE(cpfCnpj) ON UPDATE CASCADE,
    CONSTRAINT fk_cpf_prestador
    Foreign Key (cpfCnpjPrestador) REFERENCES PRESTADOR(cpfCnpj) ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS AVALIACAO(
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    nota INT NULL DEFAULT 0,
    comentario VARCHAR(255) NOT NULL,
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_usuario_avalia
    Foreign Key (id_usuario) REFERENCES Usuario(id)
);

CREATE TABLE IF NOT EXISTS MENSAGEM(
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    texto VARCHAR(255) NOT NULL,
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_usuario_mensagem
    Foreign Key (id_usuario) REFERENCES Usuario(id)
);
CREATE TABLE auditoria_log(
    id_log INT PRIMARY KEY AUTO_INCREMENT,
    nome_tabela VARCHAR(50) NOT NULL,
    id_registro INT NOT NULL,
    acao ENUM('INSERT', 'UPDATE', 'DELETE') NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario VARCHAR(100) NOT NULL
);
DELIMITER ||
CREATE TRIGGER trg_Usuario_after_insert
AFTER INSERT ON Usuario
FOR EACH ROW
BEGIN
    INSERT INTO auditoria_log(nome_tabela, id_registro, acao, usuario)
    VALUES('Usuario', NEW.id,'INSERT', USER());
END ||
CREATE TRIGGER trg_Usuario_after_update
AFTER UPDATE ON Usuario
FOR EACH ROW
BEGIN
    INSERT INTO auditoria_log(nome_tabela, id_registro, acao, usuario)
    VALUES('Usuario', NEW.id,'UPDATE', USER());
END ||
CREATE TRIGGER trg_Usuario_after_delete
AFTER DELETE ON Usuario
FOR EACH ROW
BEGIN
    INSERT INTO auditoria_log(nome_tabela, id_registro, acao, usuario)
    VALUES('Usuario', OLD.id,'DELETE', USER());
END ||
DELIMITER ;

CREATE OR REPLACE VIEW vw_detalhes_contratacao AS
SELECT 
    c.id AS contratacao_id,
    c.Status AS status_contratacao,
    
    c.cpfCnpjContratante,
    u_contratante.nome AS nome_contratante,
    u_contratante.email AS email_contratante,
    
    c.cpfCnpjPrestador,
    u_prestador.nome AS nome_prestador,
    u_prestador.email AS email_prestador,
    p.categoria AS categoria_prestador,
    p.quantidadeServicosPrestados
FROM CONTRATACAO c
INNER JOIN CONTRATANTE cont ON c.cpfCnpjContratante = cont.cpfCnpj
INNER JOIN Usuario u_contratante ON cont.id_usuario = u_contratante.id

INNER JOIN PRESTADOR p ON c.cpfCnpjPrestador = p.cpfCnpj
INNER JOIN Usuario u_prestador ON p.id_usuario = u_prestador.id;

SELECT VIEW vw_