class Autor < ApplicationRecord
    has_many :livros
    validates :nome, presence: true
  end
  