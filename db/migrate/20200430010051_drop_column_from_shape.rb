class DropColumnFromShape < ActiveRecord::Migration[5.2]
  def change
    remove_column :shapes, :type
    add_column :shapes, :shape, :string
    change_column_null :shapes, :shape, false
  end
end
