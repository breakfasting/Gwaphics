class Image < ApplicationRecord
  validates :url, :width, :height, presence: true
end
