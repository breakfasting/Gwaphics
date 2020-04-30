class CreateElements < ActiveRecord::Migration[5.2]
  def change
    create_table :elements do |t|
      t.integer :design_id, null: false
      t.integer :elementable_id, null: false
      t.string :elementable_type, null: false
      t.float :pos_x, null: false, default: 0
      t.float :pos_y, null: false, default: 0
      t.integer :z_index, null: false, default: 0
      t.float :transparency, null: false, default: 1
      t.timestamps
    end

    add_index :elements, :design_id
    add_index :elements, :elementable_id
    add_index :elements, :elementable_type
  end
end
