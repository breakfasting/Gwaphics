class CreateUploadedImages < ActiveRecord::Migration[5.2]
  def change
    create_table :uploaded_images do |t|
      t.string :title, null: false
      t.integer :uploader_id, null: false
      t.float :original_width, null: false
      t.float :original_height, null: false
      t.float :width, null: false
      t.float :height, null: false
      t.timestamps
    end

    add_index :uploaded_images, :uploader_id
  end
end
