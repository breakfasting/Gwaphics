class AddTrashToDesigns < ActiveRecord::Migration[5.2]
  def change
    add_column :designs, :trash, :boolean, :default => false
  end
end
