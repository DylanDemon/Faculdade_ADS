CREATE DATABASE techstore_db;
CREATE TABLE categorias(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);
CREATE TABLE fornecedores(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(100) NOT NULL
);
CREATE TABLE clientes(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email varchar(100) NOT NULL,
    cpf VARCHAR(12) NOT NULL
);
CREATE TABLE produtos(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preço DECIMAL(10,2) NOT NULL,
    categorias_id INT NOT NULL,
    fornecedores_id INT NOT NULL,
    CONSTRAINT fk_produtos_categorias
        FOREIGN KEY (categorias_id) REFERENCES categorias(ID),
    CONSTRAINT fk_produtos_fornecedores
        FOREIGN KEY (fornecedores_id) REFERENCES fornecedores(ID)
);
CREATE TABLE enderecos(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(100) NOT NULL,
    numero INT NULL,
    cidade VARCHAR(100) NOT NULL,   
    cliente_id INT NOT NULL,
    CONSTRAINT fk_enderecos_clientes
        Foreign Key (cliente_id) REFERENCES clientes(ID)
);
CREATE TABLE pedidos(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL DEFAULT 'pendente',
    cliente_id INT NOT NULL,

    CONSTRAINT fk_pedidos_clientes
        Foreign Key (cliente_id) REFERENCES clientes(ID)
);
CREATE Table pagamentos(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    metodo_pagamento VARCHAR(50) NOT NULL,
    pago DECIMAL(10,2) NOT NULL,
    pedido_id INT NOT NULL,
    CONSTRAINT fk_pagamentos_pedido
        Foreign Key (pedido_id) REFERENCES pedidos(ID)
);
CREATE TABLE itens_pedido(
    pedido_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(pedido_id, produto_id),
    CONSTRAINT fk_itens_pedido_pedidos
        Foreign Key (pedido_id) REFERENCES pedidos(ID),
    CONSTRAINT fk_itens_pedido_produtos
        Foreign Key (produto_id) REFERENCES produtos(ID)
);


