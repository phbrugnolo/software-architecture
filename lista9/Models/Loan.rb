class Loan < ApplicationRecord
    belongs_to :book
    belongs_to :client
    validates :started_at, :fineshed_at, presence: true
  end
  