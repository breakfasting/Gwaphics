import React from 'react';
import Moveable from 'react-moveable';
import Element from './elements/Element';
import styles from './Design.module.css';

// const Shape = () => <div>I am a shape</div>;

// eslint-disable-next-line react/prefer-stateless-function
class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledPosition: { x: 0, y: 0 },
      target: null,
    };
    // this.onControlledDragStop = this.onControlledDragStop.bind(this);
    // this.onControlledDrag = this.onControlledDrag.bind(this);
    this.frame = {
      translate: [0, 0],
      rotate: 0,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const target = document.querySelector('.target');
    this.setState({ target });
    this.element = this.props.elements[0];
  }

  componentDidUpdate(prevProps) {
    const { zoom } = this.props;
    if (zoom !== prevProps.zoom) {
      this.myRef.current.updateRect();
    }
  }

  // componentDidUpdate(prevProps) {
  //   const { selected, zoom } = this.props;
  //   if (Object.keys(prevProps.selected)[0]
  //     !== Object.keys(selected)[0]
  //     || zoom !== prevProps.zoom
  //   ) {
  //     this.updateSelected();
  //   }
  // }

  // onControlledDrag(e, position) {
  //   const { x, y } = position;
  //   this.setState({ controlledPosition: { x, y } });
  // }

  // onControlledDragStop(e, element, position) {
  //   const { updateElement, zoom } = this.props;
  //   const { x, y } = position;
  //   updateElement(null, { ...element, posX: x / zoom, posY: y / zoom });
  // }

  select(id) {
    const target = document.getElementById(id);
    this.setState({ target });
    this.element = this.props.elements[id];
  }

  updateSelected() {
    // const { selected, zoom } = this.props;

    // if (Object.keys(selected).length !== 0) {
    //   this.setState({
    //     controlledPosition: {
    //       x: Object.values(selected)[0].posX * zoom,
    //       y: Object.values(selected)[0].posY * zoom,
    //     },
    //   });
    // }
    const { receiveElement } = this.props;
    receiveElement(this.element);
  }

  render() {
    const {
      elements, design, zoom, setSelected,
    } = this.props;
    // const { controlledPosition: { x, y } } = this.state;
    const { target } = this.state;
    console.log(this.frame)
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
        {/* <Moveable
          target={target}
          draggable
          throttleDrag={0}
          onDragStart={({ set }) => {
            set(this.frame.translate);
          }}
          onDrag={({ target, beforeTranslate }) => {
            this.frame.translate = beforeTranslate;
            target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
          }}
          onDragEnd={({
            target, isDrag, clientX, clientY,
          }) => {
            console.log('what', target.style.transform);
            console.log('onDragEnd', target, isDrag);
          }}
        /> */}
        <Moveable
          ref={this.myRef}
          target={target}
          draggable
          throttleDrag={0}
          resizable
          throttleResize={0}
          rotatable
          rotationPosition="top"
          throttleRotate={0}
          onDragStart={({ set, target }) => {
            this.frame.translate = [parseInt(target.style.left, 10), parseInt(target.style.top, 10)];
            set(this.frame.translate);
          }}
          onDrag={({ beforeTranslate }) => {
            this.frame.translate = beforeTranslate;
          }}
          onResizeStart={({ setOrigin, dragStart }) => {
            setOrigin(['%', '%']);
            this.frame.translate = [parseInt(target.style.left, 10), parseInt(target.style.top, 10)];
            dragStart && dragStart.set(this.frame.translate);
          }}
          onResize={({
            target, width, height, drag,
          }) => {
            this.frame.translate = drag.beforeTranslate;
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            // console.log(this.element)
            this.element.elementableAttributes.width = width / zoom;
            this.element.elementableAttributes.height = height / zoom;
            this.updateSelected();
          }}
          onRotateStart={({ set }) => {
            this.frame.translate = [parseInt(target.style.left, 10), parseInt(target.style.top, 10)];
            set(this.frame.rotate);
          }}
          onRotate={({ beforeRotate }) => {
            this.frame.rotate = beforeRotate;
          }}
          onRender={({ target }) => {
            target.style.left = `${this.frame.translate[0]}px`;
            target.style.top = `${this.frame.translate[1]}px`;
            target.style.transform = `rotate(${this.frame.rotate}deg)`;

            // target.style.transform = `translate(${this.frame.translate[0]}px, ${
            //   this.frame.translate[1]
            // }px) rotate(${this.frame.rotate}deg)`;
          }}
        />
        <div className={styles.elementsContainer}>
          {elements.map((element, index) => {
            if (element._destroy) return null;
            return (
              <div
                key={element.id}
                id={index}
                style={{
                  position: 'absolute',
                  zIndex: element.zIndex,
                  left: element.posX * zoom,
                  top: element.posY * zoom,
                  // transform: `translate(${element.posX * zoom}px, ${element.posY * zoom}px)`,
                }}
                onClick={() => this.select(index)}
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
      </div>
    );
  }
}

export default Design;
