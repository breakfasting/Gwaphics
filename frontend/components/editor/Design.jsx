import React from 'react';
import Moveable from 'react-moveable';
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
    const { updateElement, zoom } = this.props;
    const { x, y } = position;
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
    console.log(elements);
    const { controlledPosition: { x, y } } = this.state;
    const frame = {
      translate: [0, 0],
    };
    return (
      <div
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        {/* {Object.keys(selected).length === 0 ? '' : (
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
        )} */}

        <div className={styles.elementsContainer}>
          {elements.map((element, index) => {
            if (element._destroy) return null;
            return (
              <div
                style={{
                  position: 'absolute',
                  zIndex: element.zIndex,
                  // left: element.posX * zoom,
                  // top: element.posY * zoom,
                  transform: `translate(${element.posX * zoom}px, ${element.posY * zoom}px)`,
                }}
                // onClick={() => setSelected(index)}
                className={index === 0 ? 'target' : null}
              >
                <Element element={element} zoom={zoom} />
              </div>
            // <Draggable
            //   key={element.id ? element.id : index}
            //   onDrag={this.onControlledDrag}
            //   onStop={(e, data) => this.onControlledDragStop(e, element, data)}
            //   position={{ x: element.posX * zoom, y: element.posY * zoom }}
            // >
            //   <div style={{ position: 'absolute', zIndex: element.zIndex }} onClick={() => setSelected(index)}>
            //     <Element element={element} zoom={zoom} />
            //   </div>
            // </Draggable>
            );
          })}
        </div>
        <Moveable
          target={document.querySelector('.target')}
          draggable
          throttleDrag={0}
          onDragStart={({ set }) => {
            set(frame.translate);
          }}
          onDrag={({ target, beforeTranslate }) => {
            frame.translate = beforeTranslate;
            target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
          onDragEnd={({
            target, isDrag, clientX, clientY,
          }) => {
            console.log('what', target.style.transform);
            console.log('onDragEnd', target, isDrag);
          }}
        />
      </div>
    );
  }
}

export default Design;
