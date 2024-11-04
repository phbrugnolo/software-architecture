CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  publication INTEGER NOT NULL,
  author_id INTEGER NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);
