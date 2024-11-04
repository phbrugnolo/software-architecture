Rails.application.routes.draw do
  resources :loans
  resources :clients
  resources :books
  resources :authors
end
