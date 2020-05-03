import React from 'react';
import Shape from './Shape';
import Text from './Text';
import styles from './Element.module.css';

const components = {
  Shape,
  Text,
};

const Element = ({ element, zoom }) => {
  const {
    posX, posY, transparency, zIndex,
  } = element;
  return (
    <div
      className={styles.element}
      style={{
        left: posX * zoom, top: posY * zoom, transparency, zIndex,
      }}
    >
      {React.createElement(
        components[element.elementableType],
        { elementAttr: element.elementableAttributes, zoom },
        null,
      )}
    </div>
  );
};

export default Element;
