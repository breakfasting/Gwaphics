elements = design.elements.map { |element| element.id }

json.extract! design, :id, :user_id, :creator_id, :title, :description, :public, :width, :height
json.elements elements
