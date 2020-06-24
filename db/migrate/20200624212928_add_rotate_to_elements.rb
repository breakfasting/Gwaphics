class AddRotateToElements < ActiveRecord::Migration[5.2]
  def change
    add_column :elements, :rotate, :float, :default => 0
    add_column :texts, :width, :float
    add_column :texts, :height, :float

  end
end
