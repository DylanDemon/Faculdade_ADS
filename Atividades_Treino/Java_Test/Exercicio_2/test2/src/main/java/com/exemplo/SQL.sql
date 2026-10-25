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
    Nascimento DATE not null,
    Telefone VARCHAR(15) not null,
    ID_Genero INT,
    Civil VARCHAR(30) not null,
    CEP VARCHAR(9) NOT NULL,
    Logradouro VARCHAR(160) NOT NULL,
    Bairro VARCHAR(60) NOT NULL,
    Cidade VARCHAR(60),
    UF CHAR(2) NOT NULL,
    Numero INT,
    Complemento VARCHAR(150),
    

    CONSTRAINT fk_usuario_genero
    Foreign Key (ID_Genero) REFERENCES Sexualidade(ID)
    ON DELETE SET NULL
);
CREATE TABLE if NOT EXISTS Produtos(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) not null,
    Categoria VARCHAR(50) not null,
    Estoque INT DEFAULT(0),
    Validade DATE DEFAULT("Sem Validade"),
    PrecoCusto DECIMAL(10,2) DEFAULT(0),
    PrecoVenda DECIMAL(10,2) DEFAULT(0),
    Status VARCHAR(25) DEFAULT("Inativo")
);
ALTER TABLE Produtos
MODIFY COLUMN Validade DATE DEFAULT("Sem Validade");
