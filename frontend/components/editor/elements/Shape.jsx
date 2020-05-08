import React from 'react';

// const shapeGen = (shape) => <use href={window.circle} />;

const shapeGen = (shape) => {
  const mockupResponse = [ // need default width height and desc to search
    { id: 1, shape: 'circle', url: window.circle },
    { id: 2, shape: 'rectangle', url: window.rectangle },
    { id: 3, shape: 'triangle', url: window.triangle },
    { id: 4, shape: 'hexagon', url: window.hexagon },
    { id: 5, shape: 'pentagon', url: window.pentagon },
    { id: 6, shape: 'rounded-square', url: window.roundedSquare },
    { id: 7, shape: 'heart', url: window.heart },
    { id: 8, shape: 'star', url: window.star },
    { id: 9, shape: 'right-triangle', url: window.rightTriangle },
  ];
  for (const item of mockupResponse) {
    if (item.shape === shape) {
      return <use href={item.url} />;
    }
  }
};

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
