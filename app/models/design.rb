class Design < ApplicationRecord
  validates :user_id, :creator_id, :title, :width, :height, presence: true
  validates :public, inclusion: { in: [true, false] }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :creator,
    foreign_key: :user_id,
    class_name: :User

  has_many :elements,
    foreign_key: :design_id,
    class_name: :Element,
    dependent: :destroy

  has_many :shape_elements,
    through: :elements,
    source: :elementable,
    source_type: :Shape

  has_many :text_elements,
    through: :elements,
    source: :elementable,
    source_type: :Text

  has_many :image_elements,
    through: :elements,
    source: :elementable,
    source_type: :Image

  has_one_attached :thumbnail

  accepts_nested_attributes_for :elements, allow_destroy: true
end
