import React from 'react';
import Element from './elements/Element';
import styles from './Design.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Viewer extends React.Component {
  render() {
    const {
      elements, design, zoom,
    } = this.props;
    return (
      <div
        id="viewer"
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        <div className={styles.elementsContainer}>
          {elements.map((element, index) => {
            if (element._destroy) return null;
            return (
              <div
                key={element.id ? element.id : index}
                style={{
                  position: 'absolute', zIndex: element.zIndex, left: element.posX * zoom, top: element.posY * zoom,
                }}
              >
                <Element element={element} zoom={zoom} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Viewer;
