export const fetchUserUploads = () => (
  $.ajax({
    url: '/api/uploaded_images',
    method: 'GET',
  })
);

export const updateUpload = (uploadedImage) => (
  $.ajax({
    url: `/api/uploaded_images/${uploadedImage.id}`,
    method: 'PATCH',
    data: { uploadedImage },
  })
);

export const deleteUpload = (uploadedImageId) => (
  $.ajax({
    url: `/api/uploaded_images/${uploadedImageId}`,
    method: 'DELETE',
  })
);
