class DropFolderMemberships < ActiveRecord::Migration[5.2]
  def change
    drop_table :folder_memberships
  end
end
