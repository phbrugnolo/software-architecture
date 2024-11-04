class Book < ApplicationRecord
    belongs_to :author
    has_many :loans
    validates :name, :publication, :author_id, presence: true
  end
  