import React from 'react';
import Shape from './Shape';
import Text from './Text';
import Image from './Image';
import styles from './Element.module.css';

const components = {
  Shape,
  Text,
  Image,
};

const Element = ({ element, zoom }) => {
  const { transparency } = element;
  return (
    <div
      className={`${styles.element} no-cursor`}
      style={{ opacity: transparency, height: element.elementableAttributes.height * zoom, width: element.elementableAttributes.width * zoom }}
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
