class CreateShapeTemplates < ActiveRecord::Migration[5.2]
  def change
    create_table :shape_templates do |t|
      t.string :type, null: false
      t.timestamps
    end
  end
end
