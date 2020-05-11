# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Design.destroy_all
Element.destroy_all
Text.destroy_all
Shape.destroy_all

demo = User.create(username: 'Demo', email: 'demo@aa.io', password: '123456')
wayne = User.create(username: 'Wayne', email: 'wayne@aa.io', password: '123456')

trash = Folder.create(owner_id: wayne.id, name: "Trash")
custom = Folder.create(owner_id: wayne.id, name: "Custom Folder")

design1 = Design.create(user_id: wayne.id, creator_id: demo.id, folder_id: custom.id, title: '1st design', description: 'haha my first design', public: true, width: 1920, height: 1080)
shape1 = Shape.create(width: 500, height: 500, color: '#FF0000', shape: 'rectangle')
element1 = Element.create(design_id: design1.id, elementable_id: shape1.id, elementable_type: 'Shape', pos_x: 100, pos_y: 100, transparency: 0.8 )
text1 = Text.create(font_family: 'Open Sans', font_size: 48, font_weight: 900, text: 'HAHAHAHA', color: '#000000' )
element2 = Element.create(design_id: design1.id, elementable_id: text1.id, elementable_type: 'Text', pos_x: 350, pos_y: 350, z_index: 1 )

design2 = Design.create(user_id: wayne.id, creator_id: wayne.id, folder_id: trash.id, title: "Facebook cover photo", description: "idea for Facebook stuff", public: false, width: 820, height: 312)
shape2 = Shape.create(width: 500, height: 500, color: "#00FF00", shape: "circle")
element3 = Element.create(design_id: design2.id, elementable_id: shape2.id, elementable_type: "Shape")

