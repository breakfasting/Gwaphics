class DropColumnFromUploadedImages < ActiveRecord::Migration[5.2]
  def change
    remove_column :uploaded_images, :original_width
    remove_column :uploaded_images, :original_height
  end
end
