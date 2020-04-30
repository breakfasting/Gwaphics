class CreateShapes < ActiveRecord::Migration[5.2]
  def change
    create_table :shapes do |t|
      t.integer :template_id, null: false
      t.float :width, null: false
      t.float :height, null: false
      t.string :color
      t.timestamps
    end

    add_index :shapes, :template_id
  end
end
