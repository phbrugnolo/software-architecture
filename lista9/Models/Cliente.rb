class Cliente < ApplicationRecord
    has_many :emprestimos
    validates :nome, :cpf, :data_nascimento, presence: true
  end
  