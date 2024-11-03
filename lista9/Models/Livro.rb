class Livro < ApplicationRecord
    belongs_to :autor
    has_many :emprestimos
    validates :nome, :ano, :autor_id, presence: true
  end
  