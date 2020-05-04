import React from 'react';
import Draggable from 'react-draggable';
import Element from './elements/Element';
import styles from './Design.module.css';

// const Shape = () => <div>I am a shape</div>;

// eslint-disable-next-line react/prefer-stateless-function
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeDrags: 0 };
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
  }

  onStart() {
    const { activeDrags } = this.state;
    this.setState({ activeDrags: activeDrags + 1 });
  }

  onStop() {
    const { activeDrags } = this.state;
    this.setState({ activeDrags: activeDrags - 1 });
  }

  onControlledDragStop(e, index, position) {
    const { updateElementPos } = this.props;
    const { x, y } = position;
    updateElementPos(index, x, y);
    this.onStop();
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const {
      elements, design, zoom, setSelected,
    } = this.props;
    // const elementClasses = elements.map((element) => components[element.elementableType]);
    return (
      <div
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        {elements.map((element, index) => (
          <Draggable
            {...dragHandlers}
            key={element.id}
            onStop={(e, data) => this.onControlledDragStop(e, index, data)}
            position={{ x: element.posX * zoom, y: element.posY * zoom }}
          >
            <div style={{ position: 'absolute', zIndex: element.zIndex }} onClick={() => setSelected(index)}>
              <Element element={element} zoom={zoom} />
            </div>
          </Draggable>
        ))}
      </div>
    );
  }
}

export default Design;
