import React from 'react';
import Element from './elements/Element';
import styles from './Viewer.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoom: 1 };
  }

  componentDidMount() {
    const { requestDesign } = this.props;
    requestDesign();
  }

  render() {
    const { elements, design } = this.props;
    const { zoom } = this.state;
    if (elements.length === 0) return null;
    return (
      <div
        id="viewer"
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        <div className={styles.elementsContainer}>
          {elements.map((element, index) => (
            <div
              key={element.id ? element.id : index}
              style={{
                position: 'absolute', zIndex: element.zIndex, left: element.posX * zoom, top: element.posY * zoom, transform: `rotate(${element.rotate}deg)`,
              }}
            >
              <Element element={element} zoom={zoom} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Viewer;
