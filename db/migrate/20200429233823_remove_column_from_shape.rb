class RemoveColumnFromShape < ActiveRecord::Migration[5.2]
  def change
    remove_column :shapes, :template_id
    add_column :shapes, :type, :string
  end
end
