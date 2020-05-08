elements = design.elements.map { |element| element.id }

json.extract! design, :id, :user_id, :creator_id, :folder_id, :title, :description, :public, :width, :height, :trash
json.elements elements
if design.thumbnail.attached?
  json.thumbnail url_for(design.thumbnail)
end