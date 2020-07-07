import React from 'react';
import Moveable from 'react-moveable';
import Element from './elements/Element';
import styles from './Design.module.css';

// const Shape = () => <div>I am a shape</div>

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
    };
    this.frame = {
      translate: [0, 0],
      rotate: 0,
    };
    this.keepRatio = false;
    this.myRef = React.createRef();
    this.holdShift = this.holdShift.bind(this);
    this.releaseShift = this.releaseShift.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.holdShift);
    document.addEventListener('keyup', this.releaseShift);
    const target = document.querySelector('.target');
    this.setState({ target });
    this.element = this.props.elements[0];
  }

  componentDidUpdate(prevProps) {
    const { zoom, selection } = this.props;
    if (zoom !== prevProps.zoom) {
      this.myRef.current.updateRect();
    }
    if (prevProps.selection && !selection) {
      this.setState({ target: null });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.holdShift);
    document.removeEventListener('keyup', this.releaseShift);
  }

  holdShift(e) {
    if (e.shiftKey) {
      this.keepRatio = true;
    }
  }

  releaseShift() {
    this.keepRatio = false;
  }

  // onControlledDragStop(e, element, position) {
  //   const { updateElement, zoom } = this.props;
  //   const { x, y } = position;
  //   updateElement(null, { ...element, posX: x / zoom, posY: y / zoom });
  // }

  select(id) {
    const target = document.getElementById(id);
    const { setSelection, elements } = this.props;
    this.setState({ target });
    this.element = elements[id];
    setSelection(this.element.id);
  }

  updateSelected() {
    const { receiveElement } = this.props;
    receiveElement(this.element);
  }

  render() {
    const {
      elements, design, zoom,
    } = this.props;
    const { target } = this.state;
    return (
      <div
        className={styles.design}
        style={{ width: design.width * zoom, height: design.height * zoom }}
      >
        <Moveable
          ref={this.myRef}
          target={target}
          draggable
          throttleDrag={0}
          resizable
          keepRatio={this.keepRatio}
          throttleResize={0}
          rotatable
          rotationPosition="top"
          throttleRotate={0}
          onDragStart={({ set }) => {
            this.frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
            this.frame.translate = [
              parseInt(target.style.left, 10),
              parseInt(target.style.top, 10),
            ];
            set(this.frame.translate);
          }}
          onDrag={({ beforeTranslate }) => {
            this.frame.translate = beforeTranslate;
          }}
          onDragEnd={({ isDrag }) => {
            this.element.posX = this.frame.translate[0] / zoom;
            this.element.posY = this.frame.translate[1] / zoom;
            if (isDrag) this.updateSelected();
          }}
          onResizeStart={({ setOrigin, dragStart }) => {
            setOrigin(['%', '%']);
            this.frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
            this.frame.translate = [
              parseInt(target.style.left, 10),
              parseInt(target.style.top, 10),
            ];
            if (dragStart) {
              dragStart.set(this.frame.translate);
            }
          }}
          onResize={({
            width, height, drag,
          }) => {
            this.frame.translate = drag.beforeTranslate;
            target.style.width = `${width}px`;
            target.style.height = `${height}px`;
            // console.log(this.element)
            this.element.elementableAttributes.width = width / zoom;
            this.element.elementableAttributes.height = height / zoom;
            this.setState({});
          }}
          onResizeEnd={({ isDrag }) => {
            if (isDrag) this.updateSelected();
          }}
          onRotateStart={({ set }) => {
            this.frame.translate = [
              parseInt(target.style.left, 10),
              parseInt(target.style.top, 10),
            ];
            this.frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
            set(this.frame.rotate);
          }}
          onRotate={({ beforeRotate }) => {
            this.frame.rotate = beforeRotate;
          }}
          onRotateEnd={({ isDrag }) => {
            this.element.rotate = this.frame.rotate;
            if (isDrag) this.updateSelected();
          }}
          onRender={() => {
            target.style.left = `${this.frame.translate[0]}px`;
            target.style.top = `${this.frame.translate[1]}px`;
            target.style.transform = `rotate(${this.frame.rotate}deg)`;
          }}
        />
        <div className={styles.elementsContainer} id="noElement">
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
                  transform: `rotate(${element.rotate}deg)`,
                  // transform: `translate(${element.posX * zoom}px, ${element.posY * zoom}px)`,
                }}
                onClick={() => this.select(index)}
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

export default Design;
