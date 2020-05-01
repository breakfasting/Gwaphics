class Element < ApplicationRecord
  validates :elementable_type, :pos_x, :pos_y, :z_index, :transparency, presence: true

  belongs_to :design,
    foreign_key: :design_id,
    class_name: :Design,
    optional: true

  belongs_to :elementable,
    polymorphic: true,
    dependent: :destroy

  accepts_nested_attributes_for :elementable

  def build_elementable(params)
    self.elementable = elementable_type.constantize.new(params)
  end
end
