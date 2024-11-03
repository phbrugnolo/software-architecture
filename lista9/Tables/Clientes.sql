CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  data_nascimento DATE NOT NULL,
  cpf VARCHAR(11) UNIQUE NOT NULL
);
