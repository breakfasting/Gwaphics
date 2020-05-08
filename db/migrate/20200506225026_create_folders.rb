class CreateFolders < ActiveRecord::Migration[5.2]
  def change
    create_table :folders do |t|
      t.integer :owner_id, null: false
      t.string :name, null: false
      t.timestamps
    end

    add_index :folders, :owner_id
  end
end
