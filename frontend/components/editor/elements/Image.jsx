import React from 'react';

const Image = ({
  elementAttr: {
    url,
  },
  zoom,
}) => (
  <img src={url} style={{ width: '100%', height: '100%', cursor: 'move' }} alt="" />
);

export default Image;
