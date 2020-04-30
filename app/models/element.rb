class Element < ApplicationRecord
  validates :design_id, :elementable_id, :elementable_type, :pos_x, :pos_y, :z_index, :transparency, presence: true

  belongs_to :design,
    foreign_key: :design_id,
    class_name: :Design

  belongs_to :elementable,
    polymorphic: true  
end
