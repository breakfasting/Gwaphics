export const fetchOwnedDesigns = () => (
  $.ajax({
    url: '/api/designs/owned',
    method: 'GET',
  })
);

export const fetchTemplates = () => (
  $.ajax({
    url: '/api/designs/templates',
    method: 'GET',
  })
);

export const fetchDesign = (designId) => (
  $.ajax({
    url: `/api/designs/${designId}`,
    method: 'GET',
  })
);

export const createDesign = (design) => (
  $.ajax({
    url: '/api/designs',
    method: 'POST',
    data: { design },
  })
);

export const updateDesign = (design) => (
  $.ajax({
    url: `/api/designs/${design.id}`,
    method: 'PATCH',
    data: { design },
  })
);

export const deleteDesign = (designId) => (
  $.ajax({
    url: `/api/designs/${designId}`,
    method: 'DELETE',
  })
);
