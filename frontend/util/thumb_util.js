// eslint-disable-next-line import/prefer-default-export
export const createThumbnail = ({ id, width, height }) => (
  // $.ajax({
  //   url: `http://localhost:4000/screenshot?id=${id}&width=${width}&height=${height}`,
  //   method: 'GET',
  // })
  fetch(`http://localhost:4000/screenshot?id=${id}&width=${width}&height=${height}`)
    .then((res) => res.blob())
    .then((blob) => {
      const file = new File([blob], 'File name', { type: 'image/png' });
      return file;
    })
);
