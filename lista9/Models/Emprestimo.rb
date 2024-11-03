class Emprestimo < ApplicationRecord
    belongs_to :livro
    belongs_to :cliente
    validates :data_inicio, :data_fim, presence: true
  end
  