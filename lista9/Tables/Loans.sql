CREATE TABLE loans (
  id SERIAL PRIMARY KEY,
  started_at DATE NOT NULL,
  fineshed_at DATE NOT NULL,
  client_id INTEGER NOT NULL,
  book_id INTEGER NOT NULL,
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);
