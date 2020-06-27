json.uploaded_image do
  json.extract! @uploaded_image, :id, :width, :height, :title
  if @uploaded_image.image.attached?
    json.url url_for(@uploaded_image.image)
  end
end

json.uploader do
  json.extract! @uploaded_image.uploader, :id, :username
end