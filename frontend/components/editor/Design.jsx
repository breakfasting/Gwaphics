import React from 'react';
import Draggable from 'react-draggable';
import Element from './elements/Element';
import styles from './Design.module.css';

// const Shape = () => <div>I am a shape</div>;

// eslint-disable-next-line react/prefer-stateless-function
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = { controlledPosition: { x: 0, y: 0 } };
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { selected, zoom } = this.props;
    if (Object.keys(prevProps.selected)[0]
      !== Object.keys(selected)[0]
      || zoom !== prevProps.zoom
    ) {
      this.updateSelected();
    }
  }

  onControlledDrag(e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop(e, element, position) {
    const { updateElementPos, updateElement, zoom } = this.props;
    const { x, y } = position;
    // element.posX = x / zoom;
    // element.posY = y / zoom;
    // updateElementPos(index, x, y);
    updateElement(null, { ...element, posX: x / zoom, posY: y / zoom });
  }

  updateSelected() {
    const { selected, zoom } = this.props;
    if (Object.keys(selected).length !== 0) {
      this.setState({
        controlledPosition: {
          x: Object.values(selected)[0].posX * zoom,
          y: Object.values(selected)[0].posY * zoom,
        },
      });
    }
  }

  render() {
    const {
      elements, design, zoom, setSelected, selected,
    } = this.props;
    const { controlledPosition: { x, y } } = this.state;
    return (
      <div
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        {Object.keys(selected).length === 0 ? '' : (
          <Draggable
            position={{ x: x - 2, y: y - 2 }}
          >
            <div
              className={styles.selected}
              style={{
                width: Object.values(selected)[0].elementableAttributes.width * zoom,
                height: Object.values(selected)[0].elementableAttributes.height * zoom,
              }}
            />
          </Draggable>
        )}
        <div className={styles.elementsContainer}>
          {elements.map((element, index) => {
            if (element._destroy) return null;
            return (
              <Draggable
                key={element.id ? element.id : index}
                onDrag={this.onControlledDrag}
                onStop={(e, data) => this.onControlledDragStop(e, element, data)}
                position={{ x: element.posX * zoom, y: element.posY * zoom }}
              >
                <div style={{ position: 'absolute', zIndex: element.zIndex }} onClick={() => setSelected(index)}>
                  <Element element={element} zoom={zoom} />
                </div>
              </Draggable>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Design;
