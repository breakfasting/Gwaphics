export const fetchUserUploads = () => (
  $.ajax({
    url: '/api/uploaded_images',
    method: 'GET',
  })
);
