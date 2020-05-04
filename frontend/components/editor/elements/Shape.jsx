import React from 'react';

const shapeGen = (shape, width, height, color) => {
  switch (shape) {
    case 'rectangle':
      return <rect width={width} height={height} fill={color} />;
    case 'circle':
      if (width === height) {
        return <circle cx={width / 2} cy={height / 2} r={width / 2} fill={color} />;
      }
      return <ellipse cx={width / 2} cy={height / 2} rx={width / 2} ry={height / 2} fill={color} />;
    default:
      return null;
  }
};

const Shape = ({
  elementAttr: {
    shape, width, height, color,
  },
  zoom,
}) => (
  <svg width={width * zoom} height={height * zoom} className="cursor">
    {shapeGen(shape, width * zoom, height * zoom, color)}
  </svg>
);

export default Shape;
