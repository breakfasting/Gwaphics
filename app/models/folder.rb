class Folder < ApplicationRecord
  validates :owner_id, :name, presence: true

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

  has_many :designs,
    foreign_key: :folder_id,
    class_name: :Design,
    dependent: :nullify
end
