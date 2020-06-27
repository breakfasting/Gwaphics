@uploaded_images.each do |uploaded_image|
  json.set! uploaded_image.id do
    json.extract! uploaded_image, :id, :width, :height, :title
    if uploaded_image.image.attached?
      json.url url_for(uploaded_image.image)
    end
  end
end