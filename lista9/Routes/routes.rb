Rails.application.routes.draw do
  resources :loans, path: 'emprestimos'
  resources :clients, path: 'clientes'
  resources :books, path: 'livros'
  resources :authors, path: 'autores'
end
