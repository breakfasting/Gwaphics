class CreateFolderMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :folder_memberships do |t|
      t.integer :folder_id, null: false
      t.integer :design_id, null: false
      t.timestamps
    end

    add_index :folder_memberships, :folder_id
    add_index :folder_memberships, :design_id
  end
end
