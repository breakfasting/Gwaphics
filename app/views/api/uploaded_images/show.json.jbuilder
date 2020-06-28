uploaded_images = @uploaded_image.uploader.uploaded_images.map { |ui| ui.id }

json.uploaded_image do
  json.extract! @uploaded_image, :id, :width, :height, :title, :uploader_id
  if @uploaded_image.image.attached?
    json.url url_for(@uploaded_image.image)
  end
end

json.user do
  json.extract! @uploaded_image.uploader, :email, :username, :id
  json.uploaded_images uploaded_images
end