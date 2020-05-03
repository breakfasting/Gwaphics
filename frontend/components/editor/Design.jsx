import React from 'react';
import Shape from './elements/Shape';
import styles from './Design.module.css';

// const Shape = () => <div>I am a shape</div>;

const Text = () => <div>I am a text</div>;

const components = {
  Shape,
  Text,
};

// eslint-disable-next-line react/prefer-stateless-function
class Design extends React.Component {
  render() {
    const { elements, design } = this.props;
    // const elementClasses = elements.map((element) => components[element.elementableType]);
    // debugger;
    return (
      <div className={styles.design} style={{ width: design.width, height: design.height }}>
        {elements.map((element, index) => React.createElement(
          components[element.elementableType],
          { key: index, elementAttr: element.elementableAttributes, element },
          null,
        ))}
      </div>
    );
  }
}

export default Design;
