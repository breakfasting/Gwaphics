import React from 'react';

const shapeGen = (shape) => <use href={`./assets/shapes/${shape}.svg#svg`} />;

// const shapeGen = (shape) => {
//   switch (shape) {
//     case 'rectangle':
//       return <rect width="100%" height="100%" />;
//     case 'circle':
//       // return <object data="./assets/mite-alt.svg" />;
//       return <use href="./assets/mite-alt.svg#haha" />;
//       // return <image xlinkHref="./assets/mite-alt.svg" alt="" />;
//       // return <ellipse cx="50%" cy="50%" rx="50%" ry="50%" />;
//     case 'triangle':
//       return (
//         <svg viewBox="0 0 500 433" preserveAspectRatio="none">
//           <path d="m0 433l250-433 250 433h-500z" />
//         </svg>
//       );
//     default:
//       return null;
//   }
// };

const Shape = ({
  elementAttr: {
    shape, width, height, color,
  },
  zoom,
}) => (
  <svg width={width * zoom} height={height * zoom} className="cursor" style={{ fill: color }}>
    {shapeGen(shape)}
  </svg>
);

export default Shape;
