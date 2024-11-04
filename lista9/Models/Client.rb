class Client < ApplicationRecord
    has_many :loans
    validates :name, :cpf, :birthday, presence: true
  end
  