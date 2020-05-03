import React from 'react';
import styles from './Element.module.css';
import Shape from './Shape';

const Text = () => <div>I am a text</div>;

const components = {
  Shape,
  Text,
};

const Element = ({ element }) => {
  const {
    posX, posY, transparency, zIndex,
  } = element;
  return (
    <div
      className={styles.element}
      style={{
        left: posX, top: posY, transparency, zIndex,
      }}
    >
      {React.createElement(
        components[element.elementableType],
        { elementAttr: element.elementableAttributes },
        null,
      )}
    </div>
  );
};

export default Element;
