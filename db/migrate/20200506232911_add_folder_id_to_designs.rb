class AddFolderIdToDesigns < ActiveRecord::Migration[5.2]
  def change
    add_column :designs, :folder_id, :integer
    add_index :designs, :folder_id
  end
end
