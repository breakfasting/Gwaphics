export const fetchFolders = () => (
  $.ajax({
    url: '/api/folders',
    method: 'GET',
  })
);

export const fetchFolder = (folderId) => (
  $.ajax({
    url: `/api/folders/${folderId}`,
    method: 'GET',
  })
);

export const createFolder = (folder) => (
  $.ajax({
    url: '/api/folders',
    method: 'POST',
    data: { folder },
  })
);

export const updateFolder = (folder) => (
  $.ajax({
    url: `/api/folders/${folder.id}`,
    method: 'PATCH',
    data: { folder },
  })
);

export const deleteFolder = (folderId) => (
  $.ajax({
    url: `/api/folders/${folderId}`,
    method: 'DELETE',
  })
);
