import React from 'react';
import styles from './Shape.module.css';

const shapeGen = (shape, width, height, color) => {
  switch (shape) {
    case 'rectangle':
      return <rect width={width} height={height} fill={color} />;
    case 'circle':
      return <circle cx={width / 2} cy={height / 2} r={width / 2} fill={color} />;
    default:
      return null;
  }
};

const Shape = ({
  elementAttr: {
    shape, width, height, color,
  },
  element: {
    posX, posY, transparency, zIndex,
  },
}) => (
  <div
    className={styles.element}
    style={{
      left: posX, top: posY, transparency, 'z-index': zIndex,
    }}
  >
    <svg width={width} height={height}>
      {shapeGen(shape, width, height, color)}
    </svg>
  </div>
);

export default Shape;
