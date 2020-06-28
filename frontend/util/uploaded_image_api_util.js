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
