import React from 'react';
import Element from './elements/Element';
import styles from './Design.module.css';

// const Shape = () => <div>I am a shape</div>;

// eslint-disable-next-line react/prefer-stateless-function
class Design extends React.Component {
  render() {
    const { elements, design, zoom } = this.props;
    // const elementClasses = elements.map((element) => components[element.elementableType]);
    return (
      <div
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        {elements.map((element) => <Element key={element.id} element={element} zoom={zoom} />)}
      </div>
    );
  }
}

export default Design;
