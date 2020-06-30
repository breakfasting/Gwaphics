json.design do
  json.partial! "api/designs/design", design: @design
end

json.elements do
  @design.elements.each do |element|
    json.set! element.id do
      json.extract! element, :id, :elementable_id, :elementable_type, :pos_x, :pos_y, :z_index, :transparency, :rotate
      json.elementableAttributes do
        if element.elementable_type == 'Shape'
          json.extract! element.elementable, :id, :shape, :width, :height, :color
        elsif element.elementable_type == "Text"
          json.extract! element.elementable, :id, :font_family, :font_size, :font_weight, :text, :color, :width, :height
        elsif element.elementable_type == 'Image'
          json.extract! element.elementable, :id, :url, :width, :height
        end
      end
    end
  end
end

json.shapes do
  @design.shape_elements.each do |shape|
    json.set! shape.id do
      json.extract! shape, :id, :shape, :width, :height, :color
    end
  end
end

json.text do
  @design.text_elements.each do |txt|
    json.set! txt.id do
      json.extract! txt, :id, :font_family, :font_size, :font_weight, :text, :color
    end
  end
end
