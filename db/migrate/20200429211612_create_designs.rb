class CreateDesigns < ActiveRecord::Migration[5.2]
  def change
    create_table :designs do |t|
      t.integer :user_id, null: false
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.string :description
      t.boolean :public, null: false
      t.float :width, null: false
      t.float :height, null: false

      t.timestamps
    end
    add_index :designs, :user_id
    add_index :designs, :creator_id
  end
end
