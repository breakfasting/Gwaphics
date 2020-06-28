uploaded_images = @current_user.uploaded_images.map { |ui| ui.id }

json.user do
  json.extract! @current_user, :email, :username, :id
  json.uploaded_images uploaded_images
end

json.uploaded_images do
  @uploaded_images.each do |uploaded_image|
    json.set! uploaded_image.id do
      json.extract! uploaded_image, :id, :width, :height, :title, :uploader_id
      if uploaded_image.image.attached?
        json.url url_for(uploaded_image.image)
      end
    end
  end
end