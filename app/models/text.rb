class Text < ApplicationRecord
  validates :font_size, :font_weight, :text, presence: true
end
