-- Criação do banco de dados
CREATE DATABASE controle_estoque;

-- Utilização do banco de dados
USE controle_estoque;

-- Criação da tabela 'produtos'
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  quantidade INT NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Criação da tabela 'fornecedores'
CREATE TABLE fornecedores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cep VARCHAR(10) NOT NULL,
  logradouro VARCHAR(200) NOT NULL,
  numero VARCHAR(10) NOT NULL,
  complemento VARCHAR(100),
  bairro VARCHAR(100) NOT NULL,
  localidade VARCHAR(100) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);


-- Criação da tabela 'estoque'
CREATE TABLE estoque (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT NOT NULL,
  fornecedor_id INT NOT NULL,
  FOREIGN KEY (produto_id) REFERENCES produtos(id),
  FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id),
  quantidade INT NOT NULL,
  data_entrada DATE NOT NULL
);

-- Criação da tabela 'usuarios'
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de dados na tabela 'produtos'
INSERT INTO produtos (nome, quantidade, preco)
VALUES ('Produto 1', 10, 20.50);

INSERT INTO produtos (nome, quantidade, preco)
VALUES ('Produto 2', 5, 15.99);

-- Inserção de dados na tabela 'fornecedores'
INSERT INTO fornecedores (nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone)
VALUES ('Fornecedor 1', '12345-678', 'Rua dos Fornecedores 1', '123', 'Sala A', 'Centro', 'Cidade', 'UF', '123456789');

INSERT INTO fornecedores (nome, cep, logradouro, numero, complemento, bairro, localidade, uf, telefone)
VALUES ('Fornecedor 2', '12345-678', 'Rua dos Fornecedores 2', '456', 'Sala A', 'Centro', 'Cidade', 'UF', '123456789');


-- Inserção de dados na tabela 'estoque'
INSERT INTO estoque (produto_id, fornecedor_id, quantidade, data_entrada)
VALUES (1, 1, 5, '2023-05-01');

INSERT INTO estoque (produto_id, fornecedor_id, quantidade, data_entrada)
VALUES (2, 2, 3, '2023-05-10');

-- Inserção de dados na tabela 'usuarios'
INSERT INTO usuarios (nome, email, senha)
VALUES ('Usuário 1', 'usuario1@example.com', 'senha123');

INSERT INTO usuarios (nome, email, senha)
VALUES ('Usuário 2', 'usuario2@example.com', 'senha456');

