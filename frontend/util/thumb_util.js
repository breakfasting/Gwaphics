// eslint-disable-next-line import/prefer-default-export
export const createThumbnail = ({ id, width, height }) => (
  fetch(`https://gwaphics-pup.herokuapp.com/screenshot?id=${id}&width=${width}&height=${height}`)
    .then((res) => res.blob())
    .then((blob) => {
      const file = new File([blob], 'File name', { type: 'image/png' });
      return file;
    })
);
