class ChangeTypeNullOnShape < ActiveRecord::Migration[5.2]
  def change
    change_column_null :shapes, :type, false
  end
end
