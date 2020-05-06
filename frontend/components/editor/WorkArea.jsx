import React from 'react';
import Design from './Design';
import styles from './WorkArea.module.css';
import DesignTools from './DesignTools';

// eslint-disable-next-line react/prefer-stateless-function
class WorkArea extends React.Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { setSelected } = this.props;
    if (this.wrapperRef && this.wrapperRef.contains(event.target)) {
      setSelected(null);
    }
  }

  render() {
    const {
      design, elements, zoom, updateElementPos, selected, setSelected, updateElement,
    } = this.props;
    if (Object.keys(design).length === 0) return null;
    return (
      <div className={styles.workContainer}>
        <DesignTools selected={selected} updateElement={updateElement} setSelected={setSelected} />
        <div className={styles.workArea} ref={this.setWrapperRef}>
          <div className={styles.designContainer}>
            <Design
              elements={elements}
              design={design}
              selected={selected}
              zoom={zoom}
              updateElementPos={updateElementPos}
              setSelected={setSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkArea;
