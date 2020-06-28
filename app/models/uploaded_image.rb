class UploadedImage < ApplicationRecord
  validates :title, :uploader_id, :width, :height, presence: true
  default_scope { order("created_at DESC") }

  belongs_to :uploader,
    foreign_key: :uploader_id,
    class_name: :User

  has_one_attached :image
end
