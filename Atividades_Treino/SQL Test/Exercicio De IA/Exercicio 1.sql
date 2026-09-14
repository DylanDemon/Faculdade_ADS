Create DATABASE IF NOT EXISTS AtividadeIA1;

CREATE TABLE IF NOT EXISTS Funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cargo ENUM("Assistente", "Analista de Dados","Analista Financeiro","Desenvolvedora", "Gerente") NOT NULL,
    departamento ENUM("TI", "Vendas", "RH", "Financeiro") NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    data_admissao DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS Pedidos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    CONSTRAINT
    Foreign Key (cliente_id) REFERENCES Clientes(id)
);
INSERT INTO Clientes (nome, cidade) 
VALUES ('Ana Silva', 'Sao Paulo'),
('Carlos Souza', 'Rio De Janeiro'),
('Amanda Costa','Sao Paulo'),
('Bruno Alves', 'Curitiba');

INSERT INTO Pedidos (cliente_id, valor)
VALUES (1, 350),(1,800),(2,1200),(3,150),(2,450);
 SELECT Pedidos.id AS id_pedido, Clientes.nome AS nome_cliente, 
 Pedidos.valor FROM Pedidos JOIN Clientes ON Pedidos.cliente_id = Clientes.id;