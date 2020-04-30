class Shape < ApplicationRecord
  validates :shape, :width, :height, presence: true
end
