import React from 'react';
import Draggable from 'react-draggable';
import Element from './elements/Element';
import styles from './Design.module.css';

// const Shape = () => <div>I am a shape</div>;

// eslint-disable-next-line react/prefer-stateless-function
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeDrags: 0, controlledPosition: { x: 0, y: 0 } };
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
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

  onStart() {
    const { activeDrags } = this.state;
    this.setState({ activeDrags: activeDrags + 1 });
  }

  onStop() {
    const { activeDrags } = this.state;
    this.setState({ activeDrags: activeDrags - 1 });
  }

  onControlledDrag(e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop(e, index, position) {
    const { updateElementPos } = this.props;
    const { x, y } = position;
    updateElementPos(index, x, y);
    this.onStop();
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
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
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
            {...dragHandlers}
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
                {...dragHandlers}
                key={element.id ? element.id : index}
                onDrag={this.onControlledDrag}
                onStop={(e, data) => this.onControlledDragStop(e, index, data)}
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
