CREATE TABLE emprestimos (
  id SERIAL PRIMARY KEY,
  data_inicio DATE NOT NULL,
  data_fim DATE NOT NULL,
  cliente_id INTEGER NOT NULL,
  livro_id INTEGER NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (livro_id) REFERENCES livros(id)
);
