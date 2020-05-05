import React from 'react';
// import styles from './Text.module.css';

const Text = ({
  elementAttr: {
    color, fontFamily, fontSize, fontWeight, text,
  },
  zoom,
}) => (
  <div
    // className={styles.text}
    style={{
      color, fontFamily, fontSize: fontSize * zoom, fontWeight,
    }}
  >
    {text}
  </div>
);

export default Text;
