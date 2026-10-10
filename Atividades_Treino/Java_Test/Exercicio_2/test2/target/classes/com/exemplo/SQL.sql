SHOW DATABASES;
CREATE DATABASE if NOT EXISTS BancoSQL;
CREATE TABLE if NOT EXISTS Sexualidade(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Descripcao VARCHAR(50) not null,
    Sigla VARCHAR(20) not null,
    Status CHAR(1) not null
);
CREATE TABLE if NOT EXISTS Usuarios(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) not null,
    CPF VARCHAR(16) not null,
    Nascimento VARCHAR(11) not null,
    Telefone VARCHAR(15) not null,
    CEP VARCHAR(9) NOT NULL,
    Logradouro VARCHAR(160) NOT NULL,
    Bairro VARCHAR(60) NOT NULL,
    Cidade VARCHAR(60),
    UF CHAR(2) NOT NULL,
    Numero INT NOT NULL,
    Complemento VARCHAR(150),
    ID_Genero INT,

    CONSTRAINT fk_usuario_genero
    Foreign Key (ID_Genero) REFERENCES Sexualidade(ID)
    ON DELETE SET NULL
);