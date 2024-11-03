CREATE TABLE livros (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  ano INTEGER NOT NULL,
  autor_id INTEGER NOT NULL,
  FOREIGN KEY (autor_id) REFERENCES autores(id)
);
