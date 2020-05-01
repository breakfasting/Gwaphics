class CreateTexts < ActiveRecord::Migration[5.2]
  def change
    create_table :texts do |t|
      t.string :font_family
      t.integer :font_size, null: false
      t.integer :font_weight, null: false
      t.text :text, null: false
      t.string :color
      t.timestamps
    end
  end
end
